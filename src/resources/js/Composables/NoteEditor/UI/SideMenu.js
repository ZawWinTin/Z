import { createButton, getDialogPos } from '@/Composables/NoteEditor/UI/Util';

export const addSideMenu = (editor, editorContainer, dialog) => {
    let element = null;

    editor.sideMenu.onUpdate(sideMenuState => {
        if (!element) {
            element = document.createElement('div');
            element.classList.add('tw-absolute', 'tw-opacity-80', 'tw-pr-2');
            const addBtn = createButton('', () => {
                editor.sideMenu.addBlock();
            });
            addBtn.classList.add('tw-w-6', 'tw-h-6', '!tw-p-0');
            addBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="tw-w-5 tw-h-5">
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>`;

            element.appendChild(addBtn);

            const dragBtn = createButton('', () => {
                // TODO: render a submenu with a delete option that calls "props.deleteBlock"
            });
            dragBtn.classList.add(
                'tw-w-6',
                'tw-h-6',
                '!tw-p-0',
                '!tw-cursor-grab',
            );
            dragBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="tw-w-5 tw-h-5">
              <path d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
            </svg>`;

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
