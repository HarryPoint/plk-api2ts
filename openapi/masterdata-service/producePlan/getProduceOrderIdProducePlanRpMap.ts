import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产计划相关/getProduceOrderIdProducePlanRpMapUsingPOST
*/
export default function fetchMethod(options: { data: string[], params: { EnterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultMapLongAProductionPlanAssociatesAProductionOrderWithVO>(
        {
            url: "/masterdata-service/producePlan/getProduceOrderIdProducePlanRpMap",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«Map«long,生产计划生产订单关联VO»» */
export interface IJSONResultMapLongAProductionPlanAssociatesAProductionOrderWithVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: Record<string, IProductionPlanProductionOrderAssociatedWithVO>;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产计划生产订单关联VO */
export interface IProductionPlanProductionOrderAssociatedWithVO {
    /** 创建部门id */
    createDeptId?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建员工id */
    createUserId?: string;
    /** 数据状态 0停用，1启用，-1已删除 */
    dataStatus?: number;
    /** 所属企业id */
    enterpriseId?: string;
    /** id */
    id?: string;
    /** 是否锁定 */
    isLock?: EProductionPlanProductionOrderAssociatedWithVO_isLock;
    /** 生产订单id */
    produceOrderId?: string;
    /** 生产计划 */
    producePlan?: IProductionScheduleVO;
    /** 生产计划id */
    producePlanId?: string;
    /** 修改部门id */
    updateDeptId?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 修改账户id */
    updateUserId?: string;
}
/** 生产计划VO */
export interface IProductionScheduleVO {
    /** 自动排产方式 */
    autoPlanType?: EProductionScheduleVO_autoPlanType;
    /** 排产开始时间 */
    beginTime?: number;
    /** 创建部门id */
    createDeptId?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建员工id */
    createUserId?: string;
    /** 数据状态 0停用，1启用，-1已删除 */
    dataStatus?: number;
    /** 手动排产维度 */
    dimension?: EProductionScheduleVO_dimension;
    /** 排产结束时间 */
    endTime?: number;
    /** 所属企业id */
    enterpriseId?: string;
    /** id */
    id?: string;
    /** 是否考虑自动提前 */
    isAutoMoveUp?: EProductionScheduleVO_isAutoMoveUp;
    /** 计划排产名称 */
    name?: string;
    /** 排产类型 */
    planType?: EProductionScheduleVO_planType;
    /** 手动时间维度 */
    timeDimension?: EProductionScheduleVO_timeDimension;
    /** 修改部门id */
    updateDeptId?: string;
    /** 更新时间 */
    updateTime?: number;
    /** 修改账户id */
    updateUserId?: string;
}

export enum EProductionPlanProductionOrderAssociatedWithVO_isLock {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionScheduleVO_autoPlanType {
    /** 正向排产 */
    ASC = "ASC",
    /** 倒序排产 */
    DESC = "DESC"
}

export enum EProductionScheduleVO_dimension {
    /** 订单 */
    ORDER = "ORDER",
    /** 工序 */
    PROCESS = "PROCESS"
}

export enum EProductionScheduleVO_isAutoMoveUp {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionScheduleVO_planType {
    /** 自动排产 */
    AUTO = "AUTO",
    /** 手动排产 */
    HAND = "HAND",
    /** 模糊排产 */
    VAGUE = "VAGUE"
}

export enum EProductionScheduleVO_timeDimension {
    /** 日 */
    DAY = "DAY",
    /** 班次 */
    CLASS_SHIFT = "CLASS_SHIFT"
}
