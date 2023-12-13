import { createButton, getDialogPos } from '@/Composables/NoteEditor/UI/Util';

export const addSideMenu = (editor, editorContainer, dialog) => {
    let element = null;

    editor.sideMenu.onUpdate(sideMenuState => {
        if (!element) {
            element = document.createElement('div');
            element.classList.add('tw-absolute', 'tw-opacity-80', 'tw-pr-2');
            const addBtn = createButton('<span class="pi pi-plus" />', () => {
                editor.sideMenu.addBlock();
            });
            addBtn.classList.add('tw-w-6', 'tw-h-6', '!tw-p-0');

            element.appendChild(addBtn);

            const dragBtn = createButton(
                '<span class="pi pi-ellipsis-v" />',
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
            let dialogPos = getDialogPos(dialog);
            element.style.display = 'block';
            element.style.top =
                sideMenuState.referencePos.top +
                parseFloat(sideMenuState.referencePos.height / 2) -
                parseFloat(element.offsetHeight / 2) -
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
