import { post } from '@/api/http';
 
// http://47.108.139.107:16700/doc.html#/default/produce-technology-routing-step-controller/getRoutingStepCapacityByProduceTechnologyRoutingIdsUsingPOST
export function fetchMethod(data: number[]) {
    return post({
      url: "/masterdata-service/produceTechnologyRoutingStep/getRoutingStepCapacityByProduceTechnologyRoutingIds",
      data,
    });
}
// JSONResult«List«ProduceTechnologyRoutingStepCapacityResponseDTO»»
export interface IJSONResultListProduceTechnologyRoutingStepCapacityResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProduceTechnologyRoutingStepCapacityResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// ProduceTechnologyRoutingStepCapacityResponseDTO
export interface IProduceTechnologyRoutingStepCapacityResponseDTO {
    // 创建用户ID
    createUserId: number;
    // 创建用户名
    createUserName: string;
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
    // 工艺路径id
    routingId: number;
    // 生产工艺工艺路径id
    produceTechnologyRoutingId: number;
    // 工艺路径步骤id
    routingStepId: number;
    // 工艺路径步骤
    routingStep: number;
    // 所属工序id
    processId: number;
    // 所属生产工艺产能id
    produceTechnologyCapacityId: number;
    // 所属生产工艺产能
    capacity: IProduceTechnologyCapacityResponseDTO;
    // 所属生产工艺工费id
    produceTechnologyLaborCostId: number;
    // 所属生产工艺工艺卡id
    produceTechnologyProcessSheetId: number;
    // BOM物料消耗确认类型
    bomConsumeSureType: string;
    // 进站关键参数id
    moveInKeyParameterId: number;
    // 出站关键参数id
    moveOutKeyParameterId: number;
    // 进出站类型
    inOutType: string;
    // 是否允许直接出站
    allowDirectExit: string;
}
// ProduceTechnologyCapacityResponseDTO
export interface IProduceTechnologyCapacityResponseDTO {
    // 创建用户ID
    createUserId: number;
    // 创建用户名
    createUserName: string;
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
    // 产能编号
    code: string;
    // 产能名称
    name: string;
    // 准备耗时
    readyTime: number;
    // 准备时间单位
    readyTimeUnit: string;
    // 生产耗时
    capacityProduceTime: number;
    // 生产时间单位
    capacityTimeType: string;
    // 产出数量
    capacityProduceQuantity: number;
}
