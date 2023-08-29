"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let ClassService = exports.ClassService = class ClassService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll() {
        return await this.prisma.class.findMany({
            take: 10,
        });
    }
    async findOne(id) {
        return await this.prisma.class.findFirst({
            where: {
                id,
            },
        });
    }
    async findByFilters({ date, groupId }) {
        const gte = new Date(date);
        const lte = new Date(date);
        gte.setHours(0);
        lte.setHours(0);
        lte.setDate(gte.getDate() + 1);
        return await this.prisma.class.findMany({
            where: {
                time: {
                    lte: lte.toISOString(),
                    gte: gte.toISOString(),
                },
                group: {
                    id: parseInt(groupId),
                },
            },
            orderBy: {
                time: "asc",
            },
        });
    }
};
exports.ClassService = ClassService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ClassService);
//# sourceMappingURL=class.service.js.map