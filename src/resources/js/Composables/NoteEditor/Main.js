import { BlockNoteEditor } from '@blocknote/core';
import { addFormattingToolbar } from '@/Composables/NoteEditor/UI/AddFormattingToolbar';
import { addHyperlinkToolbar } from '@/Composables/NoteEditor/UI/AddHyperlinkToolbar';
import { addSideMenu } from '@/Composables/NoteEditor/UI/AddSideMenu';
import { addSlashMenu } from '@/Composables/NoteEditor/UI/AddSlashMenu';

export default function initializeEditor(editorContainer) {
    editorContainer.style.padding = '0.5rem calc((100% - 731px) / 2)';

    const editor = BlockNoteEditor.create({
        parentElement: editorContainer,
        onEditorContentChange: () => {
            // console.log(editor.topLevelBlocks);
        },
        domAttributes: {
            editor: {
                class: 'editor',
            },
        },
    });

    addSideMenu(editor, editorContainer);
    addFormattingToolbar(editor, editorContainer);
    addSlashMenu(editor, editorContainer);
    addHyperlinkToolbar(editor, editorContainer);
}
