import { BlockNoteEditor } from '@blocknote/core';
import { createButton } from '@/Composables/NoteEditor/UI/Util';

export const addFormattingToolbar = (editor, editorContainer) => {
    let element = null;
    let boldBtn = null;

    editor.formattingToolbar.onUpdate(formattingToolbarState => {
        if (!element) {
            element = document.createElement('div');
            element.style.background = 'transparent';
            element.style.position = 'absolute';
            element.style.padding = '0.75rem';
            element.style.opacity = '0.8';
            boldBtn = createButton('set bold', () => {
                editor.toggleStyles({ bold: true });
            });
            element.appendChild(boldBtn);

            const linkBtn = createButton('set link', () => {
                editor.createLink('https://www.google.com');
            });

            element.appendChild(boldBtn);
            element.appendChild(linkBtn);
            element.style.display = 'none';

            editorContainer.appendChild(element);
        }

        if (formattingToolbarState.show) {
            element.style.display = 'block';

            boldBtn.text =
                'bold' in editor.getActiveStyles() ? 'unset bold' : 'set bold';
            element.style.top = formattingToolbarState.referencePos.top + 'px';
            element.style.left =
                formattingToolbarState.referencePos.x -
                element.offsetWidth +
                'px';
        } else {
            element.style.display = 'none';
        }
    });
};
