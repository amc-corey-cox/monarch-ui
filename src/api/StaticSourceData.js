/* eslint quotes: 0 */ // This is really a json file

export default function getStaticSourceData() {
  var staticSourceData = [
    {
      sourceDisplayName: "Mouse Genome Informatics",
      sourceDescription: "MGI is the international database resource for the laboratory mouse, providing integrated genetic, genomic, and biological data to facilitate the study of human health and disease.",
      monarchUsage: "We list genotype-phenotype associations and asserted disease-models. We use MGI identifiers as " +
        "the main hook into mouse data. Additionally, we utilize the Mouse Phenotype Ontology (MP) in our " +
        "cross-species ontology, to link all mouse phenotype annotations from various sources, which is developed by MGI.",
      vocabulary: "ECO, MA, MP, SO",
      summaryIRI: "MonarchArchive:#mgi"
    },
    {
      sourceDisplayName: "Zebrafish Information Network",
      sourceDescription: "The Zebrafish Information Resource is the community database resource for the laboratory " +
        "use of zebrafish which develops and supports integrated zebrafish genetic, genomic and developmental " +
        "information, maintains the definitive reference data sets of zebrafish research information toward " +
        "facilitation of the use of zebrafish as a model for human biology.",
      monarchUsage: "",
      vocabulary: "We integrate the curated genotype-phenotype data, including experimentally derived fish " +
            "(such as via application of morpholinos), and links to the literature as evidence.",
      summaryIRI: "MonarchArchive:#zfin"
    },
    {
      sourceDisplayName: "Zebrafish Information Network (Slim)",
      sourceDescription: "See 'Zebrafish Information Network'",
      monarchUsage: "Zfin model only containing Gene to phenotype associations using this file: https://zfin.org/downloads/phenoGeneCleanData_fish.txt",
      vocabulary: "",
      summaryIRI: "MonarchArchive:#zfinslim"
    },
    {
      sourceDisplayName: "WormBase database of nematode biology",
      sourceDescription: "WormBase is an international consortium dedicated to providing the research community with accurate, current, accessible information concerning the genetics, genomics and biology of C. elegans and related nematodes.",
      monarchUsage: "Wormbase curates variant (allele)-phenotype associations. The variants are both genetic (intrinsic) and induced through application of reagents such as RNAi (extrinsic). We list the variant-phenotype associations. Some data is pulled from WormBase directly, other data is routed via WormMine.",
      vocabulary: "WBbt, WBls, WBPhenotype",
      summaryIRI: "MonarchArchive:#"
    },
    {
      sourceDisplayName: "FlyBase",
      sourceDescription: "FlyBase is the model organism database providing integrated genetic, genomic, phenomic, and biological data for Drosophila melanogaster.",
      monarchUsage: "We integrate the genotype-phenotype associations.",
      vocabulary: "FBbt, FBcv, FBdv",
      summaryIRI: "MonarchArchive:#flybase"
    },
    {
      sourceDisplayName: "International Mouse Phenotyping Consortium",
      sourceDescription: "The International Mouse Phenotyping Consortium (IMPC) is generating a knockout mouse strain for every protein coding gene by using the embryonic stem cell resource generated by the International Knockout Mouse Consortium (IKMC). Systematic broad-based phenotyping is performed by each IMPC center using standardized procedures found within the International Mouse Phenotyping Resource of Standardised Screens (IMPReSS) resource. Gene-to-phenotype associations are made by a versioned statistical analysis.",
      monarchUsage: "We use the allele-phenotype associations recorded by the consortium. In addition, we map their allele+zygosity+background to MGI genotype identifiers. Where they do not map to MGI genotype identifiers, we create temporary identifiers for navigation purposes.",
      vocabulary: "MP",
      summaryIRI: "MonarchArchive:#impc"
    },
    {
      sourceDisplayName: "Mouse Phenome Database",
      sourceDescription: "The Mouse Phenome Database is a collaborative standardized collection of measured data on laboratory mouse strains, and includes: baseline phenotype data sets, studies of drug, diet, disease and aging effect, protocols, projects, and publications, and SNP, variation and gene expression studies. MPD collects data for classical inbred strains, other fixed-genotype strains, derived lines and populations that are openly acquirable (strain panel examples). Strains can be from JAX-Mice or from any other vendor that's a recognized breeding source.",
      monarchUsage: "genotype (strain)-phenotype association",
      vocabulary: "MP",
      summaryIRI: "MonarchArchive:#mpd"
    },
    {
      sourceDisplayName: "Online Mendelian Inheritance in Animals",
      sourceDescription: "Online Mendelian Inheritance in Animals (OMIA) is a catalogue/compendium of inherited disorders, other (single-locus) traits, and genes in 215 (non-model) animal species.",
      monarchUsage: "gene-disease association",
      vocabulary: "OMIA, OMIM",
      summaryIRI: "MonarchArchive:#omim"
    },
    {
      sourceDisplayName: "ClinVar",
      sourceDescription: "ClinVar archives and aggregates information about relationships among variation and human health. ClinVar collects reports of variants found in patient samples, assertions made regarding their clinical significance, information about the submitter, and other supporting data.",
      monarchUsage: "disease-gene association, variant-disease association, variant definitions",
      vocabulary: "UMLS",
      summaryIRI: "MonarchArchive:#clinvar"
    },
    {
      sourceDisplayName: "Online Mendelian Inheritance in Man",
      sourceDescription: "OMIM is a comprehensive, authoritative compendium of human genes and genetic phenotypes with full-text, referenced overviews that contains information on all known mendelian disorders and over 12,000 genes. OMIM focuses on the relationship between phenotype and genotype.",
      monarchUsage: "We use curated disease-gene, disease-locus, and variant-disease associations, together with their annotated references. Most OMIM diseases are further curated by the HPO group. Most OMIM diseases are integrated into the Disease Ontology.",
      vocabulary: "OMIM",
      summaryIRI: "MonarchArchive:#omim"
    },
    {
      sourceDisplayName: "ORPHANET",
      sourceDescription: "Orphanet provides reference information on rare diseases and orphan drugs to help improve the diagnosis, care and treatment of patients with rare diseases.",
      monarchUsage: "We use the Orphanet disease-gene associations.",
      vocabulary: "ORPHA",
      summaryIRI: "MonarchArchive:#orphanet"
    },
    {
      sourceDisplayName: "PANTHER",
      sourceDescription: "The PANTHER (Protein ANalysis THrough Evolutionary Relationships) Classification System was designed to classify proteins (and their genes) according to evolutionary family/subfamily, molecular function, biological process, and pathway. The PANTHER Classifications are the result of human curation as well as sophisticated bioinformatics algorithms",
      monarchUsage: "We currently utilize the 12 RefGenome species, as well as HUGO HCOP species, to seed the orthology calls. Species currently include: arabidopsis, budding yeast, chicken, chimp, dog, fission yeast, fruitfly, green lizard, horse, human, macaque, mouse, opossum, pig, platypus, rat, slime mold, worms, zebrafish. We use the orthology calls to populate the orthologs tabs for genes, as well as to infer disease-model associations via homology.",
      vocabulary: "RO",
      summaryIRI: "MonarchArchive:#panther"
    },
    {
      sourceDisplayName: "Coriell Institute for Medical Research",
      sourceDescription: "The Coriell Cell Repositories provide essential research reagents to the scientific community by establishing, verifying, maintaining, and distributing cell cultures and DNA derived from cell cultures. These collections, supported by funds from the National Institutes of Health (NIH) and several foundations, are extensively utilized by research scientists around the world. NINDS and NIGMS cell line catalog. NIGMS samples represent a variety of disease states, chromosomal abnormalities, apparently healthy individuals and many distinct human populations. NINDS samples are drawn from subjects with cerebrovascular disease, epilepsy, motor neuron disease, Parkinsonism and Tourette Syndrome, as well as controls.",
      monarchUsage: "We link pertinent cell lines to any diseases for which they are asserted models.",
      vocabulary: "OMIM",
      summaryIRI: "MonarchArchive:#coriell"
    },
    {
      sourceDisplayName: "Comparative Toxicogenomics Database",
      sourceDescription: "CTD promotes understanding about the effects of environmental chemicals on human health by integrating data from curated scientific literature to describe chemical interactions with genes and proteins, and associations between diseases and chemicals, and diseases and genes/proteins.",
      monarchUsage: "We integrate the asserted (curated) disease-gene associations, and their evidence.",
      vocabulary: "MESH, OMIM",
      summaryIRI: "MonarchArchive:#ctd"
    },
    {
      sourceDisplayName: "Human Phenotype Ontology",
      sourceDescription: "A curated database of human hereditary syndromes from OMIM, Orphanet, and DECIPHER mapped to classes of the human phenotype ontology. Various meta-attributes such as frequency, references and negations are associated with each annotation. These are presently limited to rare mendelian diseases.",
      monarchUsage: "We use the HPO disease-phenotype annotations as the primary atomic description of a disease, and list them on the disease pages, together with their references. The Human Phenotype Ontology is integrated into our cross-species phenotype ontology.",
      vocabulary: "ECO, HPO",
      summaryIRI: "MonarchArchive:#hpoa"
    },
    {
      sourceDisplayName: "Kyoto Encyclopedia of Genes and Genomes",
      sourceDescription: "KEGG is an integrated database resource consisting of the seventeen main databases including systems, genomic, chemical, and health information.",
      monarchUsage: "We list disease-gene associations, and gene-pathway associations. We utilize the KEGG Ortholog (KO) gene-pathway associations, and infer a specific-organisms' participation in that pathway based on the gene-KO links.",
      vocabulary: "MESH, OMIM",
      summaryIRI: "MonarchArchive:#kegg"
    },
    {
      sourceDisplayName: "MyGene",
      sourceDescription: "MyGene.info provides a simple-to-use REST web services to query/retrieve gene annotation data.",
      monarchUsage: "We use mygene.info's REST-services to fetch and display curated RefSeq gene descriptions.",
      vocabulary: "",
      summaryIRI: "MonarchArchive:#mygene"
    },
    {
      sourceDisplayName: "National Center for Biotechnology Information",
      sourceDescription: "Gene integrates information from a wide range of species, and includes nomenclature, Reference Sequences (RefSeqs), maps, pathways, variations, phenotypes, and links to genome-, phenotype-, and locus-specific resources worldwide. Taxon lists the taxinomic organization of organisms. Pub2Gene serves links between genes and pubmed identifiers where they are mentioned.",
      monarchUsage: "We use NCBIGene ids and symbols as the primary identifier and label for human genes in our system and NCBITaxon identifiers and scientific name for species-specific labeling. For any given gene, we also list the annotated pmids from Pub2Gene.",
      vocabulary: "",
      summaryIRI: "MonarchArchive:#ncbi"
    },
    {
      sourceDisplayName: "BioGRID",
      sourceDescription: "BioGRID is an curated gene and protein interaction repository with for major model organism species.",
      monarchUsage: "Monarch indicates gene-gene/protein-protein interactions on gene pages. We also use many of the id mappings to resolve ids in our own site.",
      vocabulary: "MI",
      summaryIRI: "MonarchArchive:#biogrid"
    },
    {
      sourceDisplayName: "GWAS Catalog",
      sourceDescription: "The NHGRI-EBI Catalog of published genome-wide association studies.",
      monarchUsage: "Monarch links the variants recorded here to the curated EFO-classes",
      vocabulary: "RO, EFO, ECO",
      summaryIRI: "MonarchArchive:#gwascatalog"
    },
    {
      sourceDisplayName: "AnimalQTLdb",
      sourceDescription: "The Animal Quantitative Trait Loci (QTL) database (Animal QTLdb) is designed to house publicly all available QTL and single-nucleotide polymorphism/gene association data on livestock animal species.",
      monarchUsage: "Monarch uses the QTL genetic maps and their computed genomic locations to create associations between the QTLs and their traits. The traits come in their internal Animal Trait ontology vocabulary, which they further map to [Vertebrate Trait](http://bioportal.bioontology.org/ontologies/VT), Product Trait, and Clinical Measurement Ontology vocabularies.",
      vocabulary: "RO, ECO",
      summaryIRI: "MonarchArchive:#animalqtldb"
    },
    {
      sourceDisplayName: "Ensembl database of automatically annotated genomic data",
      sourceDescription: "Ensembl is a genome browser for vertebrate genomes that supports research in comparative genomics, evolution, sequence variation and transcriptional regulation.",

      monarchUsage: "Monarch obtains equivalencies between Ensembl gene IDs and NCBI gene IDs",
      vocabulary: "",
      summaryIRI: "MonarchArchive:#ensembl"
    },
    {
      sourceDisplayName: "Gene Ontology Database",
      sourceDescription: "The GO defines concepts/classes used to describe gene function, and relationships between these concepts.",
      monarchUsage: "Monarch processes gene-process/function/subcellular/location associations.",
      vocabulary: "RO",
      summaryIRI: "MonarchArchive:#go"
    },
    {
      sourceDisplayName: "Gene Reviews",
      sourceDescription: "GeneReviews, an international point-of-care resource for busy clinicians, provides clinically relevant and medically actionable information for inherited conditions in a standardized journal-style format, covering diagnosis, management, and genetic counseling for patients and their families.",
      monarchUsage: "Monarch processes the GeneReviews mappings to OMIM, plus inspect the GeneReviews (html) books to pull the clinical descriptions in order to populate the definitions of the terms in the ontology. We define the GeneReviews items as classes that are either grouping classes over OMIM disease ids (gene ids are filtered out), or are made as subclasses of DOID:4 (generic disease).",
      vocabulary: "",
      summaryIRI: "MonarchArchive:#genereviews"
    },
    {
      sourceDisplayName: "HUGO Gene Nomenclature Committee",
      sourceDescription: "A curated online repository of HGNC-approved gene nomenclature, gene families and associated resources.",
      monarchUsage: "Monarch creates equivalences between HGNC identifiers and ENSEMBL and NCBIGene. We also add the links to cytogenic locations for the gene features.",
      vocabulary: "",
      summaryIRI: "MonarchArchive:#hgnc"
    },
    {
      sourceDisplayName: "Mutant Mouse Resource and Research Centers",
      sourceDescription: "A repository of mouse stocks and ES cell line collections serving the world-wide genetics and biomedical research community for the benefit of human health.",
      monarchUsage: "Centers A repository of mouse stocks and ES cell line collections serving the world-wide genetics and biomedical research community for the benefit of human health.\tMonarch processes the Mutant Mouse Resource and Research Center strain data, which includes: strains and their mutant alleles, phenotypes of the alleles, and descriptions of the research uses of the strains.",
      vocabulary: "MP",
      summaryIRI: "MonarchArchive:#mmrrc"
    },
    {
      sourceDisplayName: "Reactome - a curated knowledgebase of biological pathways",
      sourceDescription: "A repository of mouse stocks and ES cell line collections serving the world-wide genetics and biomedical research community for the benefit of human health.",
      monarchUsage: "Monarch processes ensembl gene to pathway associations",
      vocabulary: "RO",
      summaryIRI: "MonarchArchive:#reactome"
    },
    {
      sourceDisplayName: "Undiagnosed Diseases Program (UDP)",
      sourceDescription: "The National Institutes of Health (NIH) Undiagnosed Diseases Program (UDP) is part of the Undiagnosed Disease Network (UDN), an NIH Common Fund initiative that focuses on the most puzzling medical cases referred to the NIH Clinical Center in Bethesda, Maryland.",
      monarchUsage: "Monarch stores phenotypes for each case and variants of interest",
      vocabulary: "RO",
      summaryIRI: "MonarchArchive:#udp"
    },
    {
      sourceDisplayName: "Gene expression data in animals",
      sourceDescription: "Bgee is a database to retrieve and compare gene expression patterns in multiple animal species",
      monarchUsage: "Monarch stores the top 20 ranked tissues where a gene is over expressed based on differential expression measures across evidence lines",
      vocabulary: "Uberon",
      summaryIRI: "MonarchArchive:#bgee"
    },
    {
      sourceDisplayName: "STRING",
      sourceDescription: "STRING is a database of known and predicted protein-protein interactions.",
      monarchUsage: "Monarch stores protein protein interactions with a confidence >.7",
      vocabulary: "RO",
      summaryIRI: "MonarchArchive:#string"
    },
    {
      sourceDisplayName: "Rat Genome Database",
      sourceDescription: "The Rat Genome Database (RGD)is the premier site for genetic, genomic, phenotype, and disease data generated from rat research",
      monarchUsage: "Monarch stores gene to phenotype associations",
      vocabulary: "MP, RO, RGD References, RGD genes",
      summaryIRI: "MonarchArchive:#rgd"
    },
    {
      sourceDisplayName: "Saccharomyces Genome Database",
      sourceDescription: "The Saccharomyces Genome Database (SGD) provides comprehensive integrated biological information for the budding yeast Saccharomyces cerevisiae along with search and analysis tools to explore these data, enabling the discovery of functional relationships between sequence and gene products in fungi and higher organisms.",
      monarchUsage: "Monarch stores gene to phenotype associations and gene function data",
      vocabulary: "APO, RO",
      summaryIRI: "MonarchArchive:#sgd"
    },
    {
      sourceDisplayName: "Elements of Morphology",
      sourceDescription: "Elements of Morphology is a resource from NHGRI that has definitions of" +
          " morphological abnormalities, together with image depictions.",
      monarchUsage: "We pull those relationships, as well as our local mapping of equivalences" +
          " between EOM and HP terminologies.",
      vocabulary: "",
      summaryIRI: "MonarchArchive:#eom"
    },
    {
      sourceDisplayName: "Mouse Genome Informatics (MGI Slim)",
      sourceDescription: "See 'Mouse Genome Informatics'",
      monarchUsage: "Slim MGI model only containing Gene to phenotype associations. This uses mousemine: " +
          "http://www.mousemine.org/mousemine/begin.do",
      vocabulary: "",
      summaryIRI: "MonarchArchive:#mgi_slim"
    },
    {
      sourceDisplayName: "Monarch Initiative",
      sourceDescription: "This is the parser for data curated by the" +
          " Monarch Initiative https://monarchinitiative.org)." +
          " Data is currently maintained in a private repository, soon to be released.",
      monarchUsage: "",
      vocabulary: "",
      summaryIRI: "MonarchArchive:#monarch"
    },
    {
      sourceDisplayName: "Monochrom",
      sourceDescription: "Ingested data represents major " +
          "structural pieces of chromosomes which are often universally referenced, " +
          "using physical properties/observations that remain constant over different " +
          "genome builds (such as banding patterns and arms). The idea is to create a " +
          "scaffold upon which we can hang build-specific chromosomal coordinates, " +
          "and reason across them.",
      monarchUsage: "We leverage the GENO ontology and modeling patterns to build " +
          "an ontology of chromosomes for any species.We currently compute bands for " +
          "human, mouse, zebrafish, and rat but will be expanding in the future as needed.",
      vocabulary: "",
      summaryIRI: "MonarchArchive:#monochrom"
    },
    {
      sourceDisplayName: "MyChem",
      sourceDescription: "Chemical and drug annotation data, aggregated from many popular data resources.",
      monarchUsage: "",
      vocabulary: "",
      summaryIRI: "MonarchArchive:#mychem"
    },
    {
      sourceDisplayName: "NCBI Genes",
      sourceDescription: "Detailed gene information",
      monarchUsage: "We ingest gene information (gene names, symbols, ids, equivalent ids), gene history " +
          "(alt ids), and gene2pubmed publication references about each gene.",
      vocabulary: "",
      summaryIRI: "MonarchArchive:#ncbigene"
    },
    {
      sourceDisplayName: "UCSC Bands",
      sourceDescription: "UCSC definitions of cytogenic bands",
      monarchUsage: "We create nested " +
          "structures to enable overlap and containment queries. We use " +
          "Monochrom.py to create the OWL-classes of the chromosomal parts. " +
          "Here, we simply worry about the instance-level values for particular genome" +
          "builds.",
      vocabulary: "",
      summaryIRI: "MonarchArchive:#ucscbands"
    },
    {
      sourceDisplayName: "WormBase",
      sourceDescription: "Model organism database with rich data for C. elegans.",
      monarchUsage: "We ingest the following information about " +
          "genes, " +
          "sequence alterations (includes SNPs/del/ins/indel and " +
          "large chromosomal rearrangements), " +
          "RNAi as expression-affecting reagents, " +
          "genotypes and their components, " +
          "strains, " +
          "publications (and their mapping to PMIDs, if available), " +
          "allele-to-phenotype associations (including variants by RNAi), " +
          "and genetic positional information for genes and sequence alterations",
      vocabulary: "",
      summaryIRI: "MonarchArchive:#wormbase"
    },
    {
      sourceDisplayName: "Online Mendelian Inheritance in Animals (OMIA)",
      sourceDescription: "",
      monarchUsage: "We ingest information about inherited disorders, other (single-locus) traits and genes in >200 " +
          "animal species (other than human and mouse and rats). This includes information about genes, animal " +
          "taxonomy, and breeds as instances of those taxa (breeds are akin to 'strains' in other taxa), animal " +
          "diseases, along with species-specific subtypes of those diseases publications (and their mapping to PMIDs, " +
          "if available) gene-to-phenotype associations (via an anonymous variant-locus breed-to-phenotype associations."
      ,
      vocabulary: "",
      summaryIRI: "MonarchArchive:#omia"
    }
  ];

  // convert to hash map for easier lookup when merging with dynamic data
  var staticSourceDataHashMap = staticSourceData.reduce(function(map, obj) {
    map[obj.summaryIRI] = obj;
    return map;
  }, {});
  return staticSourceDataHashMap;

};
