import { BlockNoteEditor } from '@blocknote/core';

import {
    createButton,
    getDialogPos,
} from '@/Composables/NoteEditor/Components/Util';

export const addTableHandles = (
    editor: BlockNoteEditor,
    editorContainer: HTMLElement,
    dialog?: HTMLElement | null,
) => {
    let element: HTMLElement;
};