// messageList [{role:'admin',content:'你是一位专家}]
export async function chat(messageList, apikey) {
    // console.log('chat');
    try {
        const result = await fetch('https://api.302.ai/v1/chat/completions', {
            method: 'post',
            headers: {
                'Content-Type': "application/json",
                'Authorization': `Bearer ${apikey}`
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                messages: messageList,
            })
        })
        const data = result.json()
        return data
    } catch (error) {
        console.log(error);
        throw (error)
    }
}

// export default {
//     say: () => {
//         console.log('say');
//     }
// }