import { FlatList } from "react-native";
import ProfileRender from "../components/ProfileRender";

function PostDetail({ posts }) {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProfileRender post={item} />}
    />
  );
}

export default PostDetail;
