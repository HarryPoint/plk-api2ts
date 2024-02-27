import { http } from "@/api/http";

/**
* @link http://47.108.139.107:17400/doc.html#/default/公共相关/getFlowPathTaskShiftSelectorUsingGET
*/
export default function fetchMethod(options: {} = {}, extraOptions?: any) {
    return http<IJSONResultListProcessShiftReturnsVO>(
        {
            url: "/app-mobile-web/api/app/mobile/common/getFlowPathTaskShiftSelector",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«流程班次返回VO»» */
export interface IJSONResultListProcessShiftReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessShiftBackToVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 流程班次返回VO */
export interface IProcessShiftBackToVO {
    /** id */
    id?: string;
    /** 班次名称 */
    name?: string;
    /** 班次编号 */
    code?: string;
    /** 开始时间 */
    beginTime?: number;
    /** 班次结束时间类型 */
    endTimeType?: EProcessShiftBackToVO_endTimeType;
    /** 结束时间 */
    endTime?: number;
    /** 状态 */
    dataStatus?: number;
    /** 创建人 */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: number;
    /** 方案名称 */
    planName?: string;
    /** 班次配置的人员信息 */
    users?: IProcessNodeExecutorVO[];
}
/** 流程节点执行人VO */
export interface IProcessNodeExecutorVO {
    /** id */
    id?: string;
    /** 名称 */
    name?: string;
    /** 执行人id */
    executorId?: string;
    /** 执行人类型 */
    executorType?: EProcessNodeExecutorVO_executorType;
    /** 执行人系统控件类型 */
    executorSysType?: EProcessNodeExecutorVO_executorSysType;
    /** 组织字段序列 - 即动态控件 */
    organizationFieldSerialNo?: string;
    /** flowPathId */
    flowPathId?: string;
    /** 节点ID */
    flowPathNodeId?: string;
}

export enum EProcessShiftBackToVO_endTimeType {
    /** 当日 */
    TODAY = "TODAY",
    /** 次日 */
    NEXT = "NEXT"
}

export enum EProcessNodeExecutorVO_executorType {
    /** 员工 */
    USER = "USER",
    /** 角色 */
    ROLE = "ROLE",
    /** 部门 */
    DEPARTMENT = "DEPARTMENT",
    /** 班组 */
    CLASS_GROUP = "CLASS_GROUP",
    /** 系统控件 */
    SYS_CONTROL = "SYS_CONTROL"
}

export enum EProcessNodeExecutorVO_executorSysType {
    /** 创建人 */
    CREATE_BY = "CREATE_BY",
    /** 创建部门 */
    CREATE_DEPARTMENT = "CREATE_DEPARTMENT",
    /** 任务方案 */
    FLOW_PATH_TASK_PLAN = "FLOW_PATH_TASK_PLAN"
}
