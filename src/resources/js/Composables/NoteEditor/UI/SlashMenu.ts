import {
    BaseSlashMenuItem,
    BlockNoteEditor,
    DefaultBlockSchema,
} from '@blocknote/core';

import {
    adjustAdditionalHeight,
    createButton,
    getDialogPos,
} from '@/Composables/NoteEditor/UI/Util';

export const addSlashMenu = (
    editor: BlockNoteEditor,
    editorContainer: HTMLElement,
    dialog?: HTMLElement | null,
) => {
    let element: HTMLElement;

    function updateItems(
        items: BaseSlashMenuItem<DefaultBlockSchema, any, any>[],
        onClick: (
            item: BaseSlashMenuItem<DefaultBlockSchema, any, any>,
        ) => void,
        selected: number,
    ) {
        element.innerHTML = '';
        const domItems = items.map((val, i) => {
            const element = createButton(val.name, () => {
                onClick(val);
            });
            element.style.display = 'block';
            if (selected === i) {
                element.style.fontWeight = 'bold';
            }
            return element;
        });
        element.append(...domItems);
        return domItems;
    }

    editor.slashMenu.onUpdate(slashMenuState => {
        if (!element) {
            element = document.createElement('div');
            element.classList.add(
                'tw-absolute',
                'tw-shadow',
                'tw-opacity-80',
                'tw-px-4',
                'tw-py-2',
                'tw-border',
                'tw-border-slate-300',
                'dark:tw-border-primary/40',
                'tw-text-slate-700',
                'dark:tw-text-slate-50/80',
                'main-bg-2',
                'tw-rounded-md',
                'tw-h-24',
                'primary-scrollbar',
            );
            element.style.display = 'none';

            editorContainer.appendChild(element);
        }

        if (slashMenuState.show) {
            const dialogPos = getDialogPos(dialog);

            updateItems(
                slashMenuState.filteredItems,
                editor.slashMenu.itemCallback,
                slashMenuState.keyboardHoveredItemIndex,
            );

            element.style.display = 'block';
            element.style.top =
                slashMenuState.referencePos.top -
                dialogPos.top +
                adjustAdditionalHeight(element.offsetHeight, editorContainer) +
                'px';
            element.style.left =
                slashMenuState.referencePos.x - dialogPos.left + 'px';
        } else {
            element.style.display = 'none';
        }
    });
};
