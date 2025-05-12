export default function scrollScreenTo(ref) {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
}