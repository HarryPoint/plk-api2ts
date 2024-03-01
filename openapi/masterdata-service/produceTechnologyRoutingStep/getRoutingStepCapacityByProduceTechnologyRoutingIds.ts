import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/produce-technology-routing-step-controller/getRoutingStepCapacityByProduceTechnologyRoutingIdsUsingPOST
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultListProduceTechnologyRoutingStepCapacityResponseDTO>(
        {
            url: "/masterdata-service/produceTechnologyRoutingStep/getRoutingStepCapacityByProduceTechnologyRoutingIds",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«ProduceTechnologyRoutingStepCapacityResponseDTO»» */
export interface IJSONResultListProduceTechnologyRoutingStepCapacityResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProduceTechnologyRoutingStepCapacityResponseDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProduceTechnologyRoutingStepCapacityResponseDTO */
export interface IProduceTechnologyRoutingStepCapacityResponseDTO {
    /** 是否允许直接出站 */
    allowDirectExit?: EProduceTechnologyRoutingStepCapacityResponseDTO_allowDirectExit;
    /** BOM物料消耗确认类型 */
    bomConsumeSureType?: EProduceTechnologyRoutingStepCapacityResponseDTO_bomConsumeSureType;
    /** 所属生产工艺产能 */
    capacity?: IProduceTechnologyCapacityResponseDTO;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** id */
    id?: string;
    /** 进出站类型 */
    inOutType?: EProduceTechnologyRoutingStepCapacityResponseDTO_inOutType;
    /** 进站关键参数id */
    moveInKeyParameterId?: string;
    /** 出站关键参数id */
    moveOutKeyParameterId?: string;
    /** 所属工序id */
    processId?: string;
    /** 所属生产工艺产能id */
    produceTechnologyCapacityId?: string;
    /** 所属生产工艺工费id */
    produceTechnologyLaborCostId?: string;
    /** 所属生产工艺工艺卡id */
    produceTechnologyProcessSheetId?: string;
    /** 生产工艺工艺路径id */
    produceTechnologyRoutingId?: string;
    /** 工艺路径id */
    routingId?: string;
    /** 工艺路径步骤 */
    routingStep?: number;
    /** 工艺路径步骤id */
    routingStepId?: string;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
}
/** ProduceTechnologyCapacityResponseDTO */
export interface IProduceTechnologyCapacityResponseDTO {
    /** 产出数量 */
    capacityProduceQuantity?: number;
    /** 生产耗时 */
    capacityProduceTime?: number;
    /** 生产时间单位 */
    capacityTimeType?: EProduceTechnologyCapacityResponseDTO_capacityTimeType;
    /** 产能编号 */
    code?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** id */
    id?: string;
    /** 产能名称 */
    name?: string;
    /** 准备耗时 */
    readyTime?: number;
    /** 准备时间单位 */
    readyTimeUnit?: EProduceTechnologyCapacityResponseDTO_readyTimeUnit;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
}

export enum EProduceTechnologyRoutingStepCapacityResponseDTO_allowDirectExit {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProduceTechnologyRoutingStepCapacityResponseDTO_bomConsumeSureType {
    /** 在进站时确认 */
    MOVE_IN = "MOVE_IN",
    /** 在出站时确认 */
    MOVE_OUT = "MOVE_OUT"
}

export enum EProduceTechnologyRoutingStepCapacityResponseDTO_inOutType {
    /** 部分进出 */
    PART = "PART",
    /** 整进整出 */
    ALL = "ALL"
}

export enum EProduceTechnologyCapacityResponseDTO_capacityTimeType {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}

export enum EProduceTechnologyCapacityResponseDTO_readyTimeUnit {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}
