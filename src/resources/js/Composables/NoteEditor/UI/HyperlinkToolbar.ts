import { BlockNoteEditor } from "@blocknote/core";
import {
    createButton,
    getDialogPos,
    adjustAdditionalHeight,
} from '@/Composables/NoteEditor/UI/Util';

export const addHyperlinkToolbar = (editor: BlockNoteEditor, editorContainer: HTMLElement, dialog?: HTMLElement | null) => {
    let element: HTMLElement;

    editor.hyperlinkToolbar.onUpdate(hyperlinkToolbarState => {
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

            const url = hyperlinkToolbarState.url;
            const text = hyperlinkToolbarState.text;

            const editBtn = createButton('edit', () => {
                const newUrl = prompt('new url') || url; //TODO:
                editor.hyperlinkToolbar.editHyperlink(newUrl, text);
            });

            element.appendChild(editBtn);

            const removeBtn = createButton('remove', () => {
                editor.hyperlinkToolbar.deleteHyperlink();
            });

            element.appendChild(editBtn);
            element.appendChild(removeBtn);
            element.style.display = 'none';

            editorContainer.appendChild(element);
        }

        if (hyperlinkToolbarState.show) {
            let dialogPos = getDialogPos(dialog);

            element.style.display = 'block';
            element.style.top =
                hyperlinkToolbarState.referencePos.top -
                dialogPos.top +
                adjustAdditionalHeight(element.offsetHeight, editorContainer) +
                'px';
            element.style.left =
                hyperlinkToolbarState.referencePos.x - dialogPos.left + 'px';
        } else {
            element.style.display = 'none';
        }
    });
};
