import Fastify from 'fastify';

export default function server() {
	const fastify = Fastify({
		logger: true,
	});

	fastify.get('/api', function (_request, reply) {
		try {
			reply.send({ status: 'ok' });
		} catch (err) {
			throw new Error(err);
		}
	});

	fastify.listen(3005, function (err, address) {
		if (err) {
			fastify.log.error(err);
			process.exit(1);
		}
		console.log(`Server is up: ${address}`);
	});
}