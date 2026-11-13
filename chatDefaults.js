(function (global) {
  function getDefaultSelectedChatId(chats = []) {
    const preferredGroup = chats.find((chat) => chat && chat.type === 'group');
    return (preferredGroup || chats[0] || {}).id || null;
  }

  const api = { getDefaultSelectedChatId };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = api;
  }

  global.chatDefaults = api;
})(typeof window !== 'undefined' ? window : globalThis);
