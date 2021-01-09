export const dynamicallyImportPackage = async () => {
    let allMods = {}

    // Importing trackball controls and GLTFLoader
    await Promise.all([

        import('gsap/ScrollTrigger'),
        // import('three/examples/jsm/loaders/DRACOLoader.js'),

    ])
    .then(modules => {
        modules.map((item, i) => {
            allMods = {
                ...allMods,
                ...item
            }
        })
    })
    .catch(e => console.log(e))

    return allMods
}