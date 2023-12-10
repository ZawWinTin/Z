import { BlockNoteEditor } from '@blocknote/core';

export default function initializeEditor(editorContainer) {
    console.log(editorContainer);
    const editor = BlockNoteEditor.create({
        element: editorContainer,
        onUpdate: ({ editor }) => {
            console.log(editor.getJSON());
        },
    });
}
