import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产计划相关/getProduceOrderIdProducePlanRpMapUsingPOST
*/
export default function fetchMethod(options: { data: number[]params: { enterpriseId?: number } }, extraOptions?: any) {
    return http<IJSONResultMaplongAProductionPlanAssociatesAProductionOrderWithVO>(
        {
            url: "/masterdata-service/producePlan/getProduceOrderIdProducePlanRpMap",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«Map«long,生产计划生产订单关联VO»» */
export interface IJSONResultMaplongAProductionPlanAssociatesAProductionOrderWithVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, IProductionPlanProductionOrderAssociatedWithVO>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 生产计划生产订单关联VO */
export interface IProductionPlanProductionOrderAssociatedWithVO {
    /** id */
    id?: number;
    /** 数据状态 0停用，1启用，-1已删除 */
    dataStatus?: number;
    /** 创建员工id */
    createUserId?: number;
    /** 创建部门id */
    createDeptId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 是否锁定 */
    isLock?: EProductionPlanProductionOrderAssociatedWithVO_isLock;
    /** 修改账户id */
    updateUserId?: number;
    /** 修改部门id */
    updateDeptId?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 所属企业id */
    enterpriseId?: number;
    /** 生产计划id */
    producePlanId?: number;
    /** 生产计划 */
    producePlan?: IProductionScheduleVO;
    /** 生产订单id */
    produceOrderId?: number;
}
/** 生产计划VO */
export interface IProductionScheduleVO {
    /** id */
    id?: number;
    /** 数据状态 0停用，1启用，-1已删除 */
    dataStatus?: number;
    /** 创建员工id */
    createUserId?: number;
    /** 创建部门id */
    createDeptId?: number;
    /** 创建时间 */
    createTime?: string;
    /** 修改账户id */
    updateUserId?: number;
    /** 修改部门id */
    updateDeptId?: number;
    /** 更新时间 */
    updateTime?: string;
    /** 所属企业id */
    enterpriseId?: number;
    /** 计划排产名称 */
    name?: string;
    /** 排产类型 */
    planType?: EProductionScheduleVO_planType;
    /** 自动排产方式 */
    autoPlanType?: EProductionScheduleVO_autoPlanType;
    /** 是否考虑自动提前 */
    isAutoMoveUp?: EProductionScheduleVO_isAutoMoveUp;
    /** 排产开始时间 */
    beginTime?: string;
    /** 排产结束时间 */
    endTime?: string;
    /** 手动排产维度 */
    dimension?: EProductionScheduleVO_dimension;
    /** 手动时间维度 */
    timeDimension?: EProductionScheduleVO_timeDimension;
}

export enum EProductionPlanProductionOrderAssociatedWithVO_isLock {
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

export enum EProductionScheduleVO_autoPlanType {
    /** 正向排产 */
    ASC = "ASC",
    /** 倒序排产 */
    DESC = "DESC"
}

export enum EProductionScheduleVO_isAutoMoveUp {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProductionScheduleVO_dimension {
    /** 订单 */
    ORDER = "ORDER",
    /** 工序 */
    PROCESS = "PROCESS"
}

export enum EProductionScheduleVO_timeDimension {
    /** 日 */
    DAY = "DAY",
    /** 班次 */
    CLASS_SHIFT = "CLASS_SHIFT"
}
