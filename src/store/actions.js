export default {
	register(context, userId){
		// setTimeout para mostrar que e assincrono
		setTimeout(()=>{
			context.commit('register', userId)
		}, 1000)
	},
	unregistered(context, payload){
		context.commit(
			payload.type, 
            payload
        )
	}
}