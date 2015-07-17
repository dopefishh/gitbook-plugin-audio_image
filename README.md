Clickable images that play audio v0.0.7
=======================================
###Introduction
`audio_image` is a plugin that allows writers using gitbook to insert images
that play an audio file when clicked.

###Installation
Add to `book.json`: `plugins: ["audio_image"]`

###Usage
`audio_image` introduces a `aimg` block with the following syntax:

```
{% aimg [key1=arg1[, key2=arg2[,..]]] %}imgfile,audiofile1[,audiofile2[,..]]{% endaimg %}
```

##Examples
You can view these examples live [here][2]
####Minimal example
```
{% aimg %}img/img1.png,audio/img1.wav{% endaimg %}
```

####Example of keyword arguments
Keyword arguments are translated to `HTML` tags. Keyword arguments must start
with `img` or `audio` and will be added to the respective tags. This example
will show an image of a specific size and will show audio controls. Note that
for non keyword arguments in `HTML` you must use a keyword argument with an
empty value.
```
{% aimg imgwidth="50", imgheight="100", audiocontrols=""%}img/img1.png,audio/img1.wav{% endaimg %}
```

####Multiple audio files for better performance
[Different browsers support different audiofiles][1]. So if you want to support
all the browsers you can specify multiple files.
```
{% aimg %}img/img1.png,audio/img1.ogg,audio/img1.mp3{% endaimg %}
```

####Comma in filename
If you really want comma's in your filename you can escape them with a single
backslash.
```
{% aimg %}img/img\,1.png,audio/img1.wav{% endaimg %}
```

##Author
Mart Lubbers (mart@martlubbers.net)

##Licence
See `LICENCE` file.

[1]: https://en.wikipedia.org/wiki/HTML5_Audio#Supported_Browsers_4
[2]: http://dopefishh.gitbooks.io/audio_image-examples/content/examples.html
