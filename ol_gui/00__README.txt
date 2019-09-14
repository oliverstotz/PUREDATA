==============================================              Vienna, 14.09.2019
=         OL_GUI       (version 0.1)         =
==============================================


The [ol_gui] collection was made to provide PD with a hopefully useful set of GUIs (Graphical User Interfaces). All of them are PD patches, made mostly with the help of externals or libraries. Most of those GUIs emulate the feeling and flexibility of PD's native GUI objects and provide:

1.) Properties (Right click into it and select "Properties")
2.) Sizing options
3.) Remote Names

Every [ol_gui] object comes with its own helpfile, that shows and explains all functionalities and messages that this object understands. 

[ol_gui] objects were designed to work "on their own", meaning they don't use any other abstractions, so you can use individual ones without further dependencies (safe for externals). While some objects are PD Vanilla, most of them aren't and need externals.

Every help file contains a note, saying which externals were used, so it's easy to get them if they are not already present via "Help/Find Externals". Once installed, the loading of theses externals ("declare") is taken care of by the [ol_gui] objects themselves.


USED LIBRARIES/EXTERNALS:
-----------------------------------------------------------------------------
ZEXY / IEMLIB / GEM / IEMGUTS / IEMGUI / IEMMATRIX / HCS / TOF /DND-PLUGIN
-----------------------------------------------------------------------------


All [ol_gui] objects where tested and working on fresh PD installations on WINDOWS, OSX and LINUX in the following environments:

WINDOWS: WIN XP, Win 7 (64 bit)         PD 0.48 - PD 0.50
OSX: 10.13.6 (Sierra)                   PD 0.50
LINUX: Debian 10 (buster), Xfce         PD 0.49 (via apt-get)

(but see also "known issues" ...)


==========================================================================================

INSTALLATION:

copy the "ol_gui" folder to your PD externals folder (the one where DEKEN downloads and unpacks libraries and externals) - usually this is: "C:\Program Files\Pd\extra" on WINDOWS and
"/home/[username]/Documents/Pd/externals" on LINUX and OSX.

you probably want to include this folder in your search path at startup as well but it shouldn't be necessary.

from PD, open the [ol_gui] overview patches, located in this folder:

01__ol_GUI_objects_AUDIO.pd
02__ol_GUI_objects_CONTROL.pd
03__ol_GUI_objects_GEM.pd

or open the individual help patches.

==========================================================================================

DRAG AND DROP:


Many [ol_gui] objects support Drag & Drop, mainly for filenames.

Please see the [ol_gui] overview patches to know, whether they support DND.


In order to make use of this feature, do the following:


1.) Download Lucarda's "pd-dnd-plugin" with Deken (Help/Find Externals and simply search for "dnd") and put it into PD's externals folder*.

2.) Restart PD. In the PD console window, you should see a message like this :

-
Drag and Drop on Window
Drag and Drop on Canvas
Usage:
See [your PD externals path]/dnd-plugin/dnd-plugin-help.pd
-

3.) files dropped onto any PD patch's window (a.k.a. the canvas) will send a message
to the global receiver [r dropfile], consisting of the dropped file's coordinates
and it's absolute name. Also see "dnd-plugin-help.pd" patch for details.

4.) several [ol_gui] objects support drag and drop and can also tell,
whether the object was dropped within its boundaries and will only output
its name when this is the case.

==========================================================================================
//////////////////////////////////////////////////////////////////////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


KNOWN ISSUES:


////////////////// GEM (Graphics Environment for Multimedia): \\\\\\\\\\\\\\\\\\

Several [ol_gui] objects attempt to handle GEM-related tasks more user-friendly, especially dealing with OpenGL shaders. At the time of writing, the current GEM version (0.94) is still quite "under construction" for non-LINUX platforms. 

================== WINDOWS ==================

[ol_gui] GEM objects were made on a windows machine with the following setup:

PD 0.48 / GEM 0.93

and were working alright and stable in this environment.

Since PD 0.50 and GEM version 0.94, image and film loading doesn't work anymore in Windows. i hope this will soon change, but ATM you are stick to these old PD/Gem versions.

================== OSX ==================

while image and film loading is working in general, i found the overall performance of GEM 0.94 quite poor, giving very low framerates and high CPU usage. you probably want to stick to older versions of both PD and GEM as well.

On a more general note: As IOhannes (the maintainer of GEM) noted in a mail to the PD-list in 2018, future development for GEM on OSX is unlikely as APPLE announced an "end of OpenGL support".

A new graphics library called OFELIA is available vis DEKEN and looks quite promising. It's probably the way to go for OSX users in the near future.

================== LINUX ==================

Tested on Debian 10 with PD 0.49, GEM 0.94 works as expected and gives a solid and good performance !


///////////// THE LOOKS OF [OL_GUI] PATCHES ON DIFFERENT PLATFORMS \\\\\\\\\\\\\

Since PD 0.49, patches look similar across multiple versions and platforms in general. This is happily also valid for [ol_gui] objects and their help patches. 

However, one known issue to take care of, is that under LINUX, DPI scaling (a font setting in your desktop manager) should be turned OFF, or else the label texts of PD GUIs will have a distorted spacing, making some stuff even unreadable.


//////////////////////////////////////////////////////////////////////////////////////////
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


[ol_gui] wouldn't exist without the PD-LIST and the kind and generous help of the following individuals:

IOhannes Zmoelnig, Christof Ressi, Peter Plessas, Lucas Cordiviola, Dan Wilcox, Chris McCormick, Cyrille Henry, Thomas Musil, Frank Barknecht, Marian Weger, mmb, and many many more !

Thanks a lot for your patience and suppport !

Oliver Stotz                                                        Vienna, 14.09.2019

 