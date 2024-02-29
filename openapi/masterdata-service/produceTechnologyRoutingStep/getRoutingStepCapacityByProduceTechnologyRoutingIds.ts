import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/produce-technology-routing-step-controller/getRoutingStepCapacityByProduceTechnologyRoutingIdsUsingPOST
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
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProduceTechnologyRoutingStepCapacityResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProduceTechnologyRoutingStepCapacityResponseDTO */
export interface IProduceTechnologyRoutingStepCapacityResponseDTO {
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** id */
    id?: string;
    /** 工艺路径id */
    routingId?: string;
    /** 生产工艺工艺路径id */
    produceTechnologyRoutingId?: string;
    /** 工艺路径步骤id */
    routingStepId?: string;
    /** 工艺路径步骤 */
    routingStep?: number;
    /** 所属工序id */
    processId?: string;
    /** 所属生产工艺产能id */
    produceTechnologyCapacityId?: string;
    /** 所属生产工艺产能 */
    capacity?: IProduceTechnologyCapacityResponseDTO;
    /** 所属生产工艺工费id */
    produceTechnologyLaborCostId?: string;
    /** 所属生产工艺工艺卡id */
    produceTechnologyProcessSheetId?: string;
    /** BOM物料消耗确认类型 */
    bomConsumeSureType?: EProduceTechnologyRoutingStepCapacityResponseDTO_bomConsumeSureType;
    /** 进站关键参数id */
    moveInKeyParameterId?: string;
    /** 出站关键参数id */
    moveOutKeyParameterId?: string;
    /** 进出站类型 */
    inOutType?: EProduceTechnologyRoutingStepCapacityResponseDTO_inOutType;
    /** 是否允许直接出站 */
    allowDirectExit?: EProduceTechnologyRoutingStepCapacityResponseDTO_allowDirectExit;
}
/** ProduceTechnologyCapacityResponseDTO */
export interface IProduceTechnologyCapacityResponseDTO {
    /** 创建用户ID */
    createUserId?: string;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: string;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: string;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: number;
    /** 更新用户ID */
    updateUserId?: string;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: number;
    /** id */
    id?: string;
    /** 产能编号 */
    code?: string;
    /** 产能名称 */
    name?: string;
    /** 准备耗时 */
    readyTime?: number;
    /** 准备时间单位 */
    readyTimeUnit?: EProduceTechnologyCapacityResponseDTO_readyTimeUnit;
    /** 生产耗时 */
    capacityProduceTime?: number;
    /** 生产时间单位 */
    capacityTimeType?: EProduceTechnologyCapacityResponseDTO_capacityTimeType;
    /** 产出数量 */
    capacityProduceQuantity?: number;
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

export enum EProduceTechnologyRoutingStepCapacityResponseDTO_allowDirectExit {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProduceTechnologyCapacityResponseDTO_readyTimeUnit {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}

export enum EProduceTechnologyCapacityResponseDTO_capacityTimeType {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}
