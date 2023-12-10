import { BlockNoteEditor } from '@blocknote/core';
import { createButton } from '@/Composables/NoteEditor/UI/Util';

export const addHyperlinkToolbar = (editor, editorContainer) => {
    let element = null;

    editor.hyperlinkToolbar.onUpdate(hyperlinkToolbarState => {
        if (!element) {
            element = document.createElement('div');
            element.style.background = 'gray';
            element.style.position = 'absolute';
            element.style.padding = '0.75rem';
            element.style.opacity = '0.8';

            const url = hyperlinkToolbarState.url;
            const text = hyperlinkToolbarState.text;

            const editBtn = createButton('edit', () => {
                const newUrl = prompt('new url') || url;
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
            element.style.display = 'block';

            element.style.top = hyperlinkToolbarState.referencePos.top + 'px';
            element.style.left =
                hyperlinkToolbarState.referencePos.x -
                element.offsetWidth +
                'px';
        } else {
            element.style.display = 'none';
        }
    });
};
