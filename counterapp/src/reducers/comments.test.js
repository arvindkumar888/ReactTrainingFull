import {SAVE_COMMENT} from '../actions/types'
import comments from '../reducers/comments'

describe('reducers', () => {
    describe('comments', () => {
        it('updates new state ', () => {
            const state=[]
            const action={
                type:SAVE_COMMENT,
                payload:'new comment'
            }
            const newstate=comments(state,action);
            expect(newstate).toEqual(['new comment'])
        });
    });
});