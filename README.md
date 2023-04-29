# BACKEND CRUD Medical System

###The system have

* User authentication
* Email sending
* Protected Routes and Public routes
* MongoDB
* Charts

---

### To use and practice with the project follow these steps

1. Download the zip
2. Open the folder with Visual Studio Code or your favorite editor
3. Run in the terminal ``` npm install ``` to install the  dependencies
4. Run ``` npm run dev ``` to start the project in the backend
5. Follow the same steps with the frontend ZIP

---
   

```js
  try {

        if (authorization && authorization?.startsWith('Bearer')) {

            token = authorization?.split(' ')[1];

            const decoded = jwt.decode(token, process.env.SECRET_WORD);

            req.user = await User.findById(decoded.id)
                .select('-password -confirm -expireToken -tokenAuth -createdAt -updatedAt -__v')
            next()
        }

    } catch (e) {
        const error = new Error("The token is invalid");
        return res.status(500).json({ msg: error.message });
    }

```

Made with :heart: by [Aneudypq](https://t.me/Aneudypq2004)