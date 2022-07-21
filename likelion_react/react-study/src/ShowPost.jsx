import React from 'react';

const ShowPost = () => {
    return (
        <div>
            <div>showpost</div>
        </div>
    );
};

useEffect(() => {
    axios.get(`${apiUrl}posts/${Params.postID}`).then((response) => {
      console.log(response);
      setPost(response.data);
      setPostLoading(false);
      setRepls(response.data.repls);
      setReplLoading(false);
      replInput.current.focus();
    });
  }, []);

  const replCount = useMemo(()=> countRepls(repls), [repls]);
export default ShowPost;