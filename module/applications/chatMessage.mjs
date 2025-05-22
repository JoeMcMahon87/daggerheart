export default class DhpChatMesssage extends ChatMessage {
    async renderHTML() {
        if(this.type === 'dualityRoll' || this.type === 'adversaryRoll' || this.type === 'abilityUse'){
            this.content = await renderTemplate(this.content, this.system);
        }

        return super.renderHTML();
    }
}