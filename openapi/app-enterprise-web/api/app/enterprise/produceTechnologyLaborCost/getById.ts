import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/生产工艺产能相关/getByIdUsingGET_15
export default function fetchMethod(params: { id: number }, extraOptions?: any) {
    return http<IJSONResultProduceTechnologyLaborCostResponseDTO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/produceTechnologyLaborCost/getById",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// JSONResult«ProduceTechnologyLaborCostResponseDTO»
export interface IJSONResultProduceTechnologyLaborCostResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProduceTechnologyLaborCostResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ProduceTechnologyLaborCostResponseDTO
export interface IProduceTechnologyLaborCostResponseDTO {
    // 创建用户ID
    createUserId: number;
    // 创建用户名
    createUserName: string;
    // 生产工艺id
    produceTechnologyId: number;
    // 创建部门ID
    createDeptId: number;
    // 创建部门名称
    createDeptName: string;
    // 更新部门ID
    updateDeptId: number;
    // 更新部门名称
    updateDeptName: string;
    // 创建时间
    createTime: string;
    // 更新用户ID
    updateUserId: number;
    // 更新用户名称
    updateUserName: string;
    // 更新时间
    updateTime: string;
    // id
    id: number;
    // 所属工艺路径步骤id
    produceTechnologyRoutingStepId: number;
    // 工费名称
    name: string;
    // 工费编号
    code: string;
    // 合格产出工费单价
    producePrice: number;
    // 返工产出工费单价
    backProducePrice: number;
    // 准备工费
    readyPrice: number;
    // 关联工费id
    laborCostId: number;
}
