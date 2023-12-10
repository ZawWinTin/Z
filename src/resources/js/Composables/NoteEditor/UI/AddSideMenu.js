import { BlockNoteEditor } from '@blocknote/core';
import { createButton } from '@/Composables/NoteEditor/UI/Util';

export const addSideMenu = (editor, editorContainer) => {
    let element = null;

    editor.sideMenu.onUpdate(sideMenuState => {
        if (!element) {
            element = document.createElement('div');
            element.classList.add('tw-absolute', 'tw-opacity-80');
            const addBtn = createButton('+', () => {
                editor.sideMenu.addBlock();
            });
            element.appendChild(addBtn);

            const dragBtn = createButton('::', () => {
                // TODO: render a submenu with a delete option that calls "props.deleteBlock"
            });

            dragBtn.addEventListener(
                'dragstart',
                editor.sideMenu.blockDragStart,
            );
            dragBtn.addEventListener('dragend', editor.sideMenu.blockDragEnd);
            dragBtn.draggable = true;
            element.style.display = 'none';
            element.appendChild(dragBtn);

            editorContainer.appendChild(element);
        }

        if (sideMenuState.show) {
            element.style.display = 'block';

            element.style.top = sideMenuState.referencePos.top + 'px';
            element.style.left =
                sideMenuState.referencePos.x - element.offsetWidth + 'px';
        } else {
            element.style.display = 'none';
        }
    });
};
