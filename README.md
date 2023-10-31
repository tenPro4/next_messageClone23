## Install Prisma(mongodb)
```
- npm i -D prisma
- npx prisma init
- create schemas models
- npx prisma db push
```

## Notes
- Remember put /test(database name) behind the mongodb url to avoid error during prisma db push,example 
mongodb+srv://username:password@cluster0.evouusn.mongodb.net/`test`(dbName)
- Add images domains for auth in nextConfig
- Trace online status pusher need to subscribe to specify name of subscriber like `presence-*`. Detail check `app/hooks/useActiveChannel`


## Tech Includes:
1. [Next Cloudinary](https://cloudinary.com/) (Free image storage management services):
2. zustand(store of state management) + [pusher](https://pusher.com/) :Trace user online status real time
3. Modal (Contain double layer modal: ProfileDrawer -> ConfirmModal)
4. Multi Auth options: google, github and local credential
