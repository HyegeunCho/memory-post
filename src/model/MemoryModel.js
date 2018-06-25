export const MemoryType = {
    TEXT: 'MemoryType.TEXT', 
    IMAGE: 'MemoryType.IMAGE', 
    AUDIO: 'MemoryType.AUDIO'
};

export default class Memory {
    constructor() {
        this.id = 1;
        
        this.frontType = MemoryType.TEXT;
        this.front = 'boy';
        
        this.backType = MemoryType.TEXT;
        this.back = '소년';

        this.weight = 0;
    }

    
}