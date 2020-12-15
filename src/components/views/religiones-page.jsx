import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import SelectSection from '../organisms/select-section';

const useStyles = makeStyles({});

export default function RazasPage() {
    const classes = useStyles();

    return (
        <>
            <Card elevation={5}>
                <CardContent>
                    <Typography variant="h1">RELIGIONES</Typography>
                    <Typography id="intro" variant="h2">
                        INTRODUCCIÓN
                    </Typography>
                    <Typography variant="body1">
                        En Îldanneth las religiones pueden agruparse en tres
                        grandes grupos. Por una parte tenemos las conocidas como{' '}
                        <strong>«Primeras»</strong> o{' '}
                        <strong>«Verdaderas»</strong>, que son todas aquellas
                        religiones surgidas después de{' '}
                        <strong>El Despertar</strong>, cuando miles de criaturas
                        alrededor del mundo tuvieron visiones y sueños
                        proféticos acerca de todo un panteón de dioses, incluso
                        en algunos casos pudiendo interactuar directamente con
                        ellos. Estas religiones se caracterizan por tener un
                        panteón común (si bien los nombres, géneros o
                        alineamientos de los dioses puede variar ligeramente
                        entre las distintas interpretaciones o ramas que hay en
                        el mundo) y por la percepción que tienen sus acólitos y
                        clérigos de las mismas, que les permite adorar a su dios
                        en un templo extranjero donde se le conoce con otro
                        nombre, otro género o incluso otra especie, sin el mayor
                        de los problemas. Estas son las religiones más populares
                        en Îldanneth, las más antiguas y las más arraigadas.
                    </Typography>
                    <Typography variant="body1">
                        El segundo grupo de religiones es conocido como{' '}
                        <strong>«Segundas»</strong> o{' '}
                        <strong>«Apócrifas»</strong>. Son todas aquellas que, si
                        bien conocen y creen en la existencia del mismo panteón
                        de las primeras, éstas han reinterpretado por completo
                        el concepto de sus dioses, en la mayoría de casos
                        desdivinizando a la mayoría de ellos salvo a uno.
                        También es un elemento común la adopción de uno o varios
                        profetas que dirigen -o dirigieron- la vida espiritual
                        de sus seguidores y clérigos. Los acólitos seguidores de
                        las primeras y las segundas no suelen llevarse mal,
                        siempre y cuando la religión apócrifa no tenga una
                        visión negativa del dios favorito del clérigo de la
                        verdadera afectado.
                    </Typography>
                    <Typography variant="body1">
                        En el tercer grupo situamos a todas las religiones que
                        no se basan en las visiones de El Despertar. Se las
                        conoce como <strong>«Iconoclastas»</strong> o{' '}
                        <strong>«Nuevas»</strong>. Estas religiones son muy
                        variopintas y diferenciadas entre sí. Generalmente se
                        limitan a la extensión de un único territorio donde han
                        triunfado y son mayoría, aunque hay algunas notorias
                        excepciones que expanden su culto y cultistas por todo
                        el orbe de Îldanneth.
                    </Typography>
                    <Typography id="pantheon" variant="h2">
                        PANTEÓN «VERDADERO»
                    </Typography>
                    <Typography variant="body1">
                        El panteón de las primeras, cuyos nombres y géneros
                        varían según la región, se basa en un dios superior, un{' '}
                        <em>primus inter pares</em>, conocido comúnmente como{' '}
                        <strong>Astvat</strong> (~/~). Los siguientes dioses en
                        importancia son los llamados <strong>Eral</strong> (L/~)
                        y <strong>Khôrn</strong> (C/~), asociados al Orden y al
                        Caos y representados por dos columnas, una con capitel
                        pero sin basa y otra con basa pero sin capitel,
                        respectivamente; seguidos por <strong>Sivid</strong>{' '}
                        (~/B,N), dios de la vida y la sanación, representado por
                        un uróboro; <strong>Ofsma</strong> (N,L/B,N), dios de la
                        luz y de la fertilidad, representado por una llama;{' '}
                        <strong>Kishu</strong> (C,N/~), dios de la naturaleza y
                        de la felicidad, identificado con cuatro rayas paralelas
                        una sobre otra; <strong>Sifa</strong> (C,N/~), dios de
                        la industria y de las tempestades, asociado al rayo;{' '}
                        <strong>Kaaiah</strong> (C,N/~), dios del conocimiento,
                        sabiduría y las artes, representado por una pluma de
                        escribir; <strong>Yud’dha</strong> (N,L/~), dios de la
                        guerra y de la justicia, pero también de la paz,
                        representado por una espada de la que cuelga una
                        balanza; <strong>Bréaagaach</strong> (C,N/N,M), dios del
                        engaño, del exceso y la corrupción, identificado
                        generalmente con una máscara deforme sonriente; y{' '}
                        <strong>Nephrek</strong> (~/~), dios de la muerte, los
                        espíritus, el infierno y del más allá, asociado a un
                        uróboro invertido.
                    </Typography>
                    <Typography variant="body1">
                        A parte del panteón ya mencionado, las religiones
                        primeras, y segundas por ende, cuentan también con un
                        grupo de seres a los que estos dioses se enfrentan,
                        representados en abisales criaturas monstruosas y
                        antinaturales que forman parte del tejido mismo del
                        universo y la realidad. Estas abominaciones son
                        conocidas como los <strong>«Primordiales»</strong>.
                    </Typography>
                    <Typography variant="body1">
                        Los anteriormente mencionados no son los únicos seres
                        superiores que contemplan estas religiones. Todos los
                        dioses crearon a lo largo del tiempo una incontable
                        cantidad de seres destinados a servirles y
                        representarles, así como expandir su poder, no sólo
                        entre las criaturas de Îldanneth, sino entre sus dioses
                        hermanos también, en una eterna lucha de poder divina.
                        Estos semidioses, siempre limitados en poder por sus
                        dioses-creadores para nunca rivalizar con ellos, son
                        conocidos como <strong>Astvánides</strong>, en
                        referencia al dios supremo. Por su parte, los
                        Primordiales hicieron lo mismo con la misma finalidad,
                        aunque en menor cantidad pero con mucho más poder, dando
                        lugar a los temibles <strong>Primigenios</strong>,
                        terrores astrales de formas incomprensibles.
                    </Typography>
                    <Typography id="gods" variant="h2">
                        DOMINIOS Y DIOSES ASOCIADOS
                    </Typography>
                    <Typography variant="body1">
                        -Astvat: su senda puede ser seguida por cualquier
                        alineamiento. Un seguidor de Astvat puede elegir
                        cualquier dominio.
                    </Typography>
                    <Typography variant="body1">
                        -Eral: cualquier seguidor de Eral debe ser legal en su
                        alineamiento, no importa si bueno o malvado. Los
                        clérigos de Eral siguen el dominio del orden.
                    </Typography>
                    <Typography variant="body1">
                        -Khôrn: está limitado a los alineamientos caóticos. Sus
                        seguidores pueden seguir o combinar los dominios de
                        Nephrek, Kaaiah, Bréaagaach y Sifa.
                    </Typography>
                    <Typography variant="body1">
                        -Sivid: cualquier alineamiento bueno o neutral. Se
                        asocia a los dominios de la vida y protección.
                    </Typography>
                    <Typography variant="body1">
                        -Ofsma: no permite seguidores caóticos o malvados. Los
                        clérigos de Ofsma siguen el dominio de la luz y algunos
                        pocos también el de los viajes.
                    </Typography>
                    <Typography variant="body1">
                        -Kishu: no tiene seguidores con alineamiento legal. Sus
                        dominios posibles son mayoritariamente naturaleza y
                        noche.
                    </Typography>
                    <Typography variant="body1">
                        -Sifa: tampoco tiene seguidores legales por lo general.
                        Sus clérigos se especializan en los dominios de
                        tempestad o forja.
                    </Typography>
                    <Typography variant="body1">
                        -Kaaiah: castiga el alineamiento legal entre sus
                        súbditos. Dominio del conocimiento. Es posible que
                        algunos de sus clérigos tiendan al dominio arcano
                        también.
                    </Typography>
                    <Typography variant="body1">
                        -Yud’Dha: no se puede tener alineamiento caótico y
                        seguir a este dios. Asociado al dominio de la guerra.
                    </Typography>
                    <Typography variant="body1">
                        -Bréaagaach: no aprueba los alineamientos legales o
                        buenos entre sus seguidores. Los acólitos de Bréaagaach
                        siguen los dominios de engaño y ciudad.
                    </Typography>
                    <Typography variant="body1">
                        -Nephrek: cualquier alineamiento, aunque
                        mayoritariamente malvados. Inspira los dominios de la
                        muerte y tumba.
                    </Typography>
                    <Typography variant="body1">
                        Las religiones Segundas utilizan su versión del panteón
                        para determinar sus dominios, pero siempre siguiendo el
                        mismo patrón. Las Nuevas, sin embargo, son caso aparte
                        cada una de ellas. Generalmente las religiones
                        Iconoclastas son mucho menos restrictivas a la hora de
                        elegir un dominio, permitiendo casi cualquier dominio
                        asociado a cualquier alineamiento mientras siga los
                        senderos y costumbres del dios o dioses en cuestión.
                    </Typography>
                    <Typography id="mythology" variant="h2">
                        MITOLOGÍA «VERDADERA»
                    </Typography>
                    <Typography variant="body1">
                        «Al principio sólo existía la nada, los más absolutos
                        vacío y oscuridad. Es en ese estadio del universo, sin
                        materia ni tiempo ni ninguna fuerza imaginable por las
                        criaturas de Îldanneth, cuando Astvat el omnipotente y
                        sempiterno, dios de dioses y señor supremo del universo…
                        despierta.
                    </Typography>
                    <Typography variant="body1">
                        Durante eternidades incomprensibles sólo existió Astvat.
                        En su inabarcable soledad pensó, meditó e imaginó.
                        Llegado el momento, Astvat comprendió que su propia
                        existencia era una incógnita, ya que no podía
                        comprobarla por sí mismo, pues no existía nada con lo
                        que compararse o interactuar, sus conclusiones y sus
                        ideas no podían tener validez mientras sólo él habitara
                        en esa nada.
                    </Typography>
                    <Typography variant="body1">
                        Decidido a romper el eterno silencio; Astvat abrió su
                        cabeza y de lo más profundo de su psique sacó dos seres,
                        copias exactas cada una de sus diferentes instintos y
                        sentimientos, y así nacieron sus hijos, Eral, nacido de
                        su conciencia más racional y ordenada, y Khôrn, creado
                        de su lado emocional e inquieto.
                    </Typography>
                    <Typography variant="body1">
                        De la creación de sus hijos surgieron también el
                        universo y el tiempo y así comenzó el principio y
                        comienzo de todo lo que se conoce y conocerá. Pero no
                        sólo las reglas de la naturaleza surgieron en aquel
                        instante, sino que también quedaron libres todas las
                        energías y reglas que regirían eternamente las fuerzas
                        del todo recién generado.
                    </Typography>
                    <Typography variant="body1">
                        El dios padre y sus hijos viajaron por su primitiva
                        creación, y hablaron y aprendieron y debatieron y
                        aprendieron durante infinidad de tiempo.
                    </Typography>
                    <Typography variant="body1">
                        Rápidamente se darían cuenta de que aquellas energías
                        surgidas también del propio Astvat coexistían con ellos,
                        y estaban dando forma al infinito que les rodeaba.
                        Nacieron y murieron estrellas, que a su vez dieron a luz
                        y mataron a sus vástagos planetas.
                    </Typography>
                    <Typography variant="body1">
                        En seguida los dos hermanos comenzarían a discutir y
                        pelear, y la una vez tranquila soledad que disfrutó
                        Astvat se tornaría ruido y tensión. Entonces Astvat
                        decidiría recluirse y volver al extremo de la creación
                        en busca de la nada que le permitiera continuar
                        meditando y filosofando en armonía y ausencia de
                        discusión. Astvat no quiso continuar viendo y viviendo
                        el fruto de su creación e inestabilidad interior. Tenía
                        que solucionarlo a través de la búsqueda eterna del
                        equilibrio.
                    </Typography>
                    <Typography variant="body1">
                        Sin embargo, la falta de mediación propiciada por su
                        padre sólo fue el detonante de la más fiera de las
                        discusiones entre los dos dioses, que pronto decidirían
                        separarse y conocer las florecientes creaciones por su
                        cuenta.
                    </Typography>
                    <Typography variant="body1">
                        Durante sus viajes los dioses conocerían a extrañas
                        criaturas, hermanos al fin y al cabo ya que surgen del
                        mismo creador, conocidas entre ellas como Primordial,
                        seres grotescos sin nombre. Estos Primordiales no eran
                        sino la forma física de las energías mismas del
                        universo.
                    </Typography>
                    <Typography variant="body1">
                        Khôrn sería el primero en encontrarse cara a cara con
                        uno de sus hermanos Primordiales. Los Primordiales
                        mantenían en ese momento una guerra de proporciones
                        panastronómicas, fruto de la cual se estaba dando la
                        creación de masas que serán los embriones de las
                        estrellas. El Primordial, sin haber visto nunca un dios,
                        lo confundió con uno de los suyos y no dudó en atacarle
                        ferozmente. Khôrn le combatió durante mucho tiempo, sin
                        mayor esfuerzo, convirtiéndolo en una diversión y
                        entretenimiento. Cuando ya no hubo más diversión, Khôrn
                        sencillamente se alejó y abandonó la lucha.
                    </Typography>
                    <Typography variant="body1">
                        El dios pensó al respecto, meditó y creyó que si su
                        padre pudo crearle a él a partir de sus pensamientos, él
                        podría crear un nuevo dios con esos recuerdos. Khôrn se
                        abrió la cabeza imitando a su padre y de dentro surgió
                        Yud’Dha, el primero de los segundos, a partir de los
                        sentimientos y memorias surgidos del conflicto de Khôrn
                        con el Primordial.
                    </Typography>
                    <Typography variant="body1">
                        La misma situación se dio con Eral, y se repetiría con
                        Khôrn en muchos más casos. De esos encuentros surgirían
                        los diferentes dioses uno tras otro, algunos nacidos del
                        dios del orden y otros del dios del caos.
                    </Typography>
                    <Typography variant="body1">
                        El conflicto con los Primordiales se recrudeció en
                        cuantos éstos se unieron, aunque nunca de forma
                        amistosa, al ver cómo el número y poder de los dioses
                        crecía. Los Primordiales, para compensar el
                        desequilibrio de fuerzas, decidieron copiar a sus
                        hermanos divinos; de su esencia extrajeron energía pura
                        del universo y a partir de ella generaron la materia
                        antinatural que daría forma a sus propias creaciones,
                        los Primigenios. Ante la amenaza de ser superados en
                        número y poder, los dioses hicieron lo mismo, dando
                        lugar a los Astvánides. Dioses y Astvánides no sólo
                        lucharon contra Primordiales y Primigenios, sino que, al
                        igual que sus hermanos elementales, también se
                        enfrentaron mutuamente por nuevas cotas de poder que les
                        permitiera encabezar la lucha de facciones divinas. Las
                        Guerras en las Estrellas comenzaron.
                    </Typography>
                    <Typography variant="body1">
                        Las Guerras en las Estrellas no se libraron en campos de
                        batalla reconocibles para nosotros, los simples seres
                        mortales, sino que tuvieron lugar en un frente de
                        existencia tan superior como indescifrable para las
                        criaturas de Îldanneth. Fue durante estas guerras cuando
                        la vida surgió como la conocemos: Eral y Khôrn se
                        enfrentaron entre sí, engañados por un Primordial, y su
                        lucha se extendió por todos los planos. Por primera vez
                        los hermanos peleaban sin tapujos, dándolo todo. Tan
                        destructivo fue ese choque de dioses que la existencia
                        misma, el tiempo y la energía que compone el universo se
                        detenía con cada colisión. La lucha les llevó hasta el
                        extremo de la creación, donde la batalla acabó en lo más
                        parecido a una muerte que un dios puede experimentar. En
                        el plano del Vacío, los dos dioses quedarían eternamente
                        enfrentados en un ciclo de vida y muerte sin fin que
                        provocaría una rotación y regeneración de la energía de
                        todos los planos, creando así la vida en el universo y a
                        los dos últimos dioses, Sivid y Nephrek, siendo cada uno
                        representación de la eterna batalla entre la vida y la
                        muerte a la que toda la creación se vería condenada
                        desde este momento.
                    </Typography>
                    <Typography variant="body1">
                        Tanto duraría la Guerra que la más simple forma de vida
                        acabaría convirtiéndose en los seres que hoy somos,
                        conocemos o estamos por conocer. Con los dos dioses más
                        poderosos enfrascados en un torbellino de muerte y
                        resurrección eternamente, los Primordiales y sus
                        súbditos, los Primigenios, tuvieron vía libre para hacer
                        la guerra y sembrar el caos por doquier.
                    </Typography>
                    <Typography variant="body1">
                        Poco supimos por nuestros dioses de qué hechos
                        acontecieron en estos tiempos, demasiados oscuros y
                        tenebrosos los detalles deben ser. No sabemos el
                        transcurso ni los pormenores, pero sabemos el final que
                        los dioses nos transmitirían en el futuro; los
                        Primordiales fueron encerrados y esclavizados o
                        divididos en esencia pura por todo el universo. Los
                        Primigenios serían erradicados, aunque sabemos que unos
                        pocos consiguieron escapar y esconderse. Por su parte
                        los dioses reinarían en todos los planos y por todo el
                        universo, nunca sin olvidar sus rencillas y empleando a
                        sus Astvánides personales para mermar el poder de sus
                        hermanos, en un enfrentamiento sin fin que procuraría
                        siempre mantener el equilibrio de fuerzas. Los dioses
                        decidieron borrar la memoria a los habitantes del
                        universo y devolverle la vida a los fallecidos en el
                        conflicto para evitar que los mortales continuaran una
                        lucha que ya no tenía lugar y limpiar cualquier rastro
                        de corrupción primigenia en las débiles mentes
                        inferiores. Tuvo lugar El Despertar. Algunos afortunados
                        fueron elegidos de entre los seres que ocupaban
                        Îldanneth y se les informó a través de visiones y sueños
                        por los propios dioses y Astvánides de lo anteriormente
                        acaecido y cómo llevar la civilización hacia delante,
                        siempre con la fe a los dioses como bandera.
                    </Typography>
                    <Typography variant="body1">
                        Hasta la llegada del propio Astvat, que llegará para
                        corregir los errores de su creación, es obligación de
                        todos los seres mortales que pueblan Îldanneth buscar la
                        iluminación interior a través de las enseñanzas de sus
                        dioses para ser dignos de la salvación del Dios Padre, y
                        no caer en el olvido eterno destinado a aquellos que
                        mancillan el nombre de Astvat y su creación con su
                        imperfecto comportamiento y corrupta huella en el
                        sendero de la vida de Îldanneth.»
                    </Typography>
                    <Typography variant="body1">
                        -Extracto del inicio del libro{' '}
                        <em>«Historia General de Îldanneth»</em>, escrito por el
                        clérigo e historiador meredionita Rammil Akamerie,
                        conservador general de la Biblioteca Nacional de
                        Meredion.
                    </Typography>
                </CardContent>
            </Card>
            <SelectSection />
        </>
    );
}
