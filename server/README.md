# API

## Auth

#### POST /auth/signup

- requestBody

```
{
    email: string
    password: string
}
```

#### POST /auth/signin

- requestBody

```js
{
  email: string;
  password: string;
}
```

- responseBody

```js
{
  accessToken: string;
  refreshToken: string;
}
```

#### GET /auth/refresh

- header

```js
Authorization: `Bearer ${refreshToken}`;
```

- responseBody

```js
{
  accessToken: string;
  refreshToken: string;
}
```

#### GET /auth/me (getProfile)

- responseBody

```ts
type ResponseProfile = Profile & Category;
```

#### PATCH /auth/me (editProfile)

- requestBody

```ts
type RequestProfile = Omit<
  Profile,
  'id' | 'email' | 'kakaoImageUri' | 'loginType'
>;
```

- responseBody

```ts
type ResponseProfile = Profile & Category;
```

#### POST /auth/logout

#### DELETE /auth/me

#### PATCH /auth/category

- requestBody

```ts
type Category
```

- responseBody

```ts
type ResponseProfile = Profile & Category;
```

#### POST /auth/oauth/kakao

- requestBody

```js
{
  token: string;
}
```

- responseBody

```js
{
  accessToken: string;
  refreshToken: string;
}
```

#### POST /auth/oauth/apple

- requestBody

```js
{
  identityToken: string;
  appId: string;
  nickname: string | null;
}
```

- responseBody

```js
{
  accessToken: string;
  refreshToken: string;
}
```

<br>

## Marker & Post

#### GET /markers/my

- responseBody

```ts
Marker[]
```

#### GET /posts/:id

- param

```ts
{
  id: number;
}
```

- requestBody

```ts
// type ResponsePost = Post & { images: ImageUri[] };

type ResponseSinglePost = ResponsePost & { isFavorite: boolean };
```

#### DELETE /posts/:id

- param

```ts
{
  id: number;
}
```

#### GET /posts/my

- query

```js
{
  page: number;
}
```

- responseBody

```js
// type ResponsePost = Post & { images: ImageUri[] };
ResponsePost[];
```

#### GET /posts/my/search

- query

```js
{
  query: string;
  page: number;
}
```

- responseBody

```js
// type ResponsePost = Post & { images: ImageUri[] };
ResponsePost[];
```

#### POST /posts

- requestBody

```ts
type RequestCreatePost = Omit<Post, 'id'> & { imageUris: ImageUri[] };
```

#### PATCH /post/:id

- param

```ts
{
  id: number;
}
```

- requestBody

```ts
type RequestUpdatePost = {
  id: number;
  body: Omit<Post, 'id' | 'longitude' | 'latitude' | 'address'> & {
    imageUris: ImageUri[];
  };
};
```

- responseBody

```ts
type ResponseSinglePost = ResponsePost & { isFavorite: boolean };
```

#### GET /posts (getCalendarPosts)

- query

```ts
{
  year: number;
  month: number;
}
```

- responseBody

```ts
// type CalendarPost = {
//   id: number;
//   title: string;
//   address: string;
// };

type ResponseCalendarPost = Record<number, CalendarPost[]>;
```

#### GET /favorites/my

- query

```ts
{
  page: number;
}
```

#### POST /favorites/:id

- param

```ts
{
  id: number;
}
```

- responseBody

```ts
{
  id: number;
}
```

<br>

## Image

#### POST /images

- requestBody : `FormData`
- responseBody : `string[]`
