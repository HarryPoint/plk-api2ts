import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16700/doc.html#/default/工艺路径相关/getRoutingStepsByRoutingIdsUsingPOST
*/
export default function fetchMethod(options: { data: string[], params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListBaseVO1>(
        {
            url: "/masterdata-service/routing/getRoutingStepsByRoutingIds",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«基础VO»»_1 */
export interface IJSONResultListBaseVO1 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IBaseVO1[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 基础VO_1 */
export interface IBaseVO1 {
    /** id */
    id?: string;
    /** 数据状态 0停用，1启用，-1已删除 */
    dataStatus?: number;
    /** 创建员工id */
    createUserId?: string;
    /** 创建部门id */
    createDeptId?: string;
    /** 创建时间 */
    createTime?: number;
    /** 修改账户id */
    updateUserId?: string;
    /** 修改部门id */
    updateDeptId?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 所属工艺路径id */
    routingId?: string;
    /** 所属工艺路径步骤 */
    routingStep?: number;
    /** 所属工序id */
    processId?: string;
    /** 所属主物料id */
    materialId?: string;
    /** 所属主物料bomid */
    materialBomId?: string;
    /** 所属进料工艺卡id */
    processSheetBeforeId?: string;
    /** 所属出料工艺卡id */
    processSheetAfterId?: string;
    /** 准备耗时 */
    readyTime?: number;
    /** 准备时间单位 */
    readyTimeUnit?: EBaseVO1_readyTimeUnit;
    /** 进出站方式 */
    inOutType?: EBaseVO1_inOutType;
    /** 是否允许直接出站 */
    allowDirectExit?: EBaseVO1_allowDirectExit;
    /** BOM物料消耗确认类型 */
    bomConsumeSureType?: EBaseVO1_bomConsumeSureType;
    /** 合格产出工费单价 */
    producePrice?: number;
    /** 返工产出工费单价 */
    backProducePrice?: number;
    /** 产能-生产时间 */
    capacityProduceTime?: number;
    /** 产能-时间类型 */
    capacityTimeType?: EBaseVO1_capacityTimeType;
    /** 产能-生产数量 */
    capacityProduceQuantity?: number;
    /** 准备工费（元） */
    readyPrice?: number;
}

export enum EBaseVO1_readyTimeUnit {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}

export enum EBaseVO1_inOutType {
    /** 部分进出 */
    PART = "PART",
    /** 整进整出 */
    ALL = "ALL"
}

export enum EBaseVO1_allowDirectExit {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EBaseVO1_bomConsumeSureType {
    /** 在进站时确认 */
    MOVE_IN = "MOVE_IN",
    /** 在出站时确认 */
    MOVE_OUT = "MOVE_OUT"
}

export enum EBaseVO1_capacityTimeType {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}
