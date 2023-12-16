import { BlockNoteEditor } from "@blocknote/core";
import {
    createButton,
    getDialogPos,
    adjustAdditionalHeight,
} from '@/Composables/NoteEditor/UI/Util';

export const addFormattingToolbar = (editor: BlockNoteEditor, editorContainer: HTMLElement, dialog: HTMLElement) => {
    let element: HTMLElement;
    let boldBtn: HTMLAnchorElement;

    editor.formattingToolbar.onUpdate(formattingToolbarState => {
        if (!element) {
            element = document.createElement('div');
            element.classList.add(
                'tw-flex',
                'tw-space-x-2',
                'tw-absolute',
                'tw-shadow',
                'tw-opacity-80',
                'tw-p-2',
                'tw-border',
                'tw-border-slate-300',
                'dark:tw-border-primary/40',
                'tw-text-slate-700',
                'dark:tw-text-slate-50/80',
                'main-bg-2',
                'tw-rounded-md',
            );
            boldBtn = createButton('Set Bold', () => {
                editor.toggleStyles({ bold: true });
            });
            element.appendChild(boldBtn);

            const linkBtn = createButton('Set Link', () => {
                editor.createLink('https://www.google.com');
            });

            element.appendChild(boldBtn);
            element.appendChild(linkBtn);
            element.style.display = 'none';

            editorContainer.appendChild(element);
        }

        if (formattingToolbarState.show) {
            let dialogPos = getDialogPos(dialog);

            element.style.display = 'flex';

            boldBtn.text =
                'bold' in editor.getActiveStyles() ? 'Unset Bold' : 'Set Bold';
            element.style.top =
                formattingToolbarState.referencePos.top -
                dialogPos.top +
                adjustAdditionalHeight(element.offsetHeight, editorContainer) +
                'px';
            element.style.left =
                formattingToolbarState.referencePos.x - dialogPos.left + 'px';
        } else {
            element.style.display = 'none';
        }
    });
};
