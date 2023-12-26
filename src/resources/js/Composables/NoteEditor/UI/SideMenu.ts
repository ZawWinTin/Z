import { BlockNoteEditor } from '@blocknote/core';
import { createButton, getDialogPos } from '@/Composables/NoteEditor/UI/Util';

export const addSideMenu = (
    editor: BlockNoteEditor,
    editorContainer: HTMLElement,
    dialog?: HTMLElement | null,
) => {
    let element: HTMLElement;

    editor.sideMenu.onUpdate(sideMenuState => {
        if (!element) {
            element = document.createElement('div');
            element.classList.add('tw-absolute', 'tw-opacity-80', 'tw-pr-2');
            const addBtn = createButton('<i class="pi pi-plus" />', () => {
                editor.sideMenu.addBlock();
            });
            addBtn.classList.add('tw-w-6', 'tw-h-6', '!tw-p-0');

            element.appendChild(addBtn);

            const dragBtn = createButton(
                '<i class="pi pi-ellipsis-v -tw-mr-1"></i><i class="pi pi-ellipsis-v -tw-ml-1"></i>',
                () => {
                    // TODO: render a submenu with a delete option that calls "props.deleteBlock"
                },
            );
            dragBtn.classList.add(
                'tw-w-6',
                'tw-h-6',
                '!tw-p-0',
                '!tw-cursor-grab',
            );

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
            const dialogPos = getDialogPos(dialog);
            element.style.display = 'block';
            element.style.top =
                sideMenuState.referencePos.top +
                sideMenuState.referencePos.height / 2 -
                element.offsetHeight / 2 -
                dialogPos.top +
                'px';
            element.style.left =
                sideMenuState.referencePos.x -
                element.offsetWidth -
                dialogPos.left +
                'px';
        } else {
            element.style.display = 'none';
        }
    });
};
