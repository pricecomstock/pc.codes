const iconPathPrefix = "/images/tag-icons/";
const defaultIconPath = iconPathPrefix + "lightning-icon.svg";
const tagInfo = {
  svelte: { icon: iconPathPrefix + "svelte.svg", properName: "SvelteJS" },
  node: { icon: iconPathPrefix + "nodejs.svg", properName: "Node.js" },
  vue: { icon: iconPathPrefix + "vue.svg", properName: "Vue.js" },
  react: { icon: iconPathPrefix + "react.svg", properName: "React" },
  python: { icon: iconPathPrefix + "python.svg", properName: "Python" },
  gcp: { icon: iconPathPrefix + "gcp.svg", properName: "Google Cloud" },
  socketio: { icon: iconPathPrefix + "socketio.svg", properName: "Socket.io" },
  mongo: { icon: iconPathPrefix + "mongo.svg", properName: "MongoDB" },
  slack: { icon: iconPathPrefix + "slack.svg", properName: "Slack" },
  postgres: { icon: iconPathPrefix + "postgres.svg", properName: "PostgreSQL" },
};

function getTagInfo(name) {
  if (!tagInfo[name]) {
    return { icon: defaultIconPath, properName: name };
  } else {
    return tagInfo[name];
  }
}

export default getTagInfo;
