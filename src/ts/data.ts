const postsData = [
    {
        id: 1,
        title: 'Post 1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dolor eget risus facilisis commodo a at augue. Phasellus rutrum arcu tristique diam aliquam euismod. Nulla sollicitudin commodo augue, id porttitor felis suscipit nec. Suspendisse nec turpis et mauris rhoncus interdum eu sed risus. Vestibulum id tortor tincidunt massa luctus convallis. Vestibulum mauris diam, dignissim eget felis eu, accumsan blandit nisi. Cras eleifend posuere facilisis. Ut ac nisi non nunc interdum vehicula. Donec sit amet nulla feugiat, aliquet ligula vel, rhoncus nisl. Vivamus fringilla sapien sodales elit volutpat, nec imperdiet nisi pellentesque. Mauris eget pretium mauris. Vivamus non vestibulum ligula. Vivamus sit amet neque sit amet felis consequat tempor. Integer sagittis vulputate nisi sed hendrerit. Maecenas nec sem id orci sollicitudin aliquet quis quis nisl.',
        imageUrl: 'https://picsum.photos/id/1/1200/800',
    },
    {
        id: 3,
        title: 'Post 3',
        body: 'Body of post 3',
        imageUrl: 'https://picsum.photos/id/3/1200/800',
    },
    {
        id: 6,
        title: 'Post 6',
        body: 'Body of post 6',
        imageUrl: 'https://picsum.photos/id/6/1200/800',
    }
]

const postsComents = [
    {
        id: 1,
        postId: 1,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dolor eget risus facilisis commodo a at augue. Phasellus rutrum arcu tristique diam aliquam euismod. Nulla sollicitudin commodo augue, id porttitor felis suscipit nec. Suspendisse nec turpis et mauris rhoncus interdum eu sed risus. Vestibulum id tortor tincidunt massa luctus convallis. Vestibulum mauris diam, dignissim eget felis eu, accumsan blandit nisi. Cras eleifend posuere facilisis. Ut ac nisi non nunc interdum vehicula. Donec sit amet nulla feugiat, aliquet ligula vel, rhoncus nisl. Vivamus fringilla sapien sodales elit volutpat, nec imperdiet nisi pellentesque. Mauris eget pretium mauris. Vivamus non vestibulum ligula. Vivamus sit amet neque sit amet felis consequat tempor. Integer sagittis vulputate nisi sed hendrerit. Maecenas nec sem id orci sollicitudin aliquet quis quis nisl.',
        email: 'user1@hotmail.com',
    },
    {
        id: 2,
        postId: 1,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dolor eget risus facilisis commodo a at augue. Phasellus rutrum arcu tristique diam aliquam euismod. Nulla sollicitudin commodo augue, id porttitor felis suscipit nec. Suspendisse nec turpis et mauris rhoncus interdum eu sed risus. Vestibulum id tortor tincidunt massa luctus convallis. Vestibulum mauris diam, dignissim eget felis eu, accumsan blandit nisi. Cras eleifend posuere facilisis. Ut ac nisi non nunc interdum vehicula. Donec sit amet nulla feugiat, aliquet ligula vel, rhoncus nisl. Vivamus fringilla sapien sodales elit volutpat, nec imperdiet nisi pellentesque. Mauris eget pretium mauris. Vivamus non vestibulum ligula. Vivamus sit amet neque sit amet felis consequat tempor. Integer sagittis vulputate nisi sed hendrerit. Maecenas nec sem id orci sollicitudin aliquet quis quis nisl.',
        email: 'user2@hotmail.com',
    },
    {
        id: 3,
        postId: 3,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dolor eget risus facilisis commodo a at augue. Phasellus rutrum arcu tristique diam aliquam euismod. Nulla sollicitudin commodo augue, id porttitor felis suscipit nec. Suspendisse nec turpis et mauris rhoncus interdum eu sed risus. Vestibulum id tortor tincidunt massa luctus convallis. Vestibulum mauris diam, dignissim eget felis eu, accumsan blandit nisi. Cras eleifend posuere facilisis. Ut ac nisi non nunc interdum vehicula. Donec sit amet nulla feugiat, aliquet ligula vel, rhoncus nisl. Vivamus fringilla sapien sodales elit volutpat, nec imperdiet nisi pellentesque. Mauris eget pretium mauris. Vivamus non vestibulum ligula. Vivamus sit amet neque sit amet felis consequat tempor. Integer sagittis vulputate nisi sed hendrerit. Maecenas nec sem id orci sollicitudin aliquet quis quis nisl.',
        email: 'user3@hotmail.com',
    },
    {
        id: 4,
        postId: 3,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dolor eget risus facilisis commodo a at augue. Phasellus rutrum arcu tristique diam aliquam euismod. Nulla sollicitudin commodo augue, id porttitor felis suscipit nec. Suspendisse nec turpis et mauris rhoncus interdum eu sed risus. Vestibulum id tortor tincidunt massa luctus convallis. Vestibulum mauris diam, dignissim eget felis eu, accumsan blandit nisi. Cras eleifend posuere facilisis. Ut ac nisi non nunc interdum vehicula. Donec sit amet nulla feugiat, aliquet ligula vel, rhoncus nisl. Vivamus fringilla sapien sodales elit volutpat, nec imperdiet nisi pellentesque. Mauris eget pretium mauris. Vivamus non vestibulum ligula. Vivamus sit amet neque sit amet felis consequat tempor. Integer sagittis vulputate nisi sed hendrerit. Maecenas nec sem id orci sollicitudin aliquet quis quis nisl.',
        email: 'user4@hotmail.com',
    },
    {
        id: 5,
        postId: 6,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dolor eget risus facilisis commodo a at augue. Phasellus rutrum arcu tristique diam aliquam euismod. Nulla sollicitudin commodo augue, id porttitor felis suscipit nec. Suspendisse nec turpis et mauris rhoncus interdum eu sed risus. Vestibulum id tortor tincidunt massa luctus convallis. Vestibulum mauris diam, dignissim eget felis eu, accumsan blandit nisi. Cras eleifend posuere facilisis. Ut ac nisi non nunc interdum vehicula. Donec sit amet nulla feugiat, aliquet ligula vel, rhoncus nisl. Vivamus fringilla sapien sodales elit volutpat, nec imperdiet nisi pellentesque. Mauris eget pretium mauris. Vivamus non vestibulum ligula. Vivamus sit amet neque sit amet felis consequat tempor. Integer sagittis vulputate nisi sed hendrerit. Maecenas nec sem id orci sollicitudin aliquet quis quis nisl.',
        email: 'user5@hotmail.com',
    },
    {
        id: 6,
        postId: 6,
        body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vel dolor eget risus facilisis commodo a at augue. Phasellus rutrum arcu tristique diam aliquam euismod. Nulla sollicitudin commodo augue, id porttitor felis suscipit nec. Suspendisse nec turpis et mauris rhoncus interdum eu sed risus. Vestibulum id tortor tincidunt massa luctus convallis. Vestibulum mauris diam, dignissim eget felis eu, accumsan blandit nisi. Cras eleifend posuere facilisis. Ut ac nisi non nunc interdum vehicula. Donec sit amet nulla feugiat, aliquet ligula vel, rhoncus nisl. Vivamus fringilla sapien sodales elit volutpat, nec imperdiet nisi pellentesque. Mauris eget pretium mauris. Vivamus non vestibulum ligula. Vivamus sit amet neque sit amet felis consequat tempor. Integer sagittis vulputate nisi sed hendrerit. Maecenas nec sem id orci sollicitudin aliquet quis quis nisl.',
        email: 'user6@hotmail.com',
    }
]