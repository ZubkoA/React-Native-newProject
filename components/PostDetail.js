import { FlatList } from "react-native";
import ProfileRender from "../components/ProfileRender";

function PostDetail({ posts }) {
  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProfileRender data={item} />}
    />
  );
}

export default PostDetail;
