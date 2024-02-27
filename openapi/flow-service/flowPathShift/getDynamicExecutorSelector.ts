import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16500/doc.html#/default/任务班次相关/getDynamicExecutorSelectorUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProcessNodeDynamicExecutorReturnsVO>(
        {
            url: "/flow-service/flowPathShift/getDynamicExecutorSelector",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«流程节点动态执行人返回VO»» */
export interface IJSONResultListProcessNodeDynamicExecutorReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheProcessNodeDynamicExecutorReturnsVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 流程节点动态执行人返回VO */
export interface ITheProcessNodeDynamicExecutorReturnsVO {
    /** 动态执行人类型 */
    dynamicExecutorType?: ETheProcessNodeDynamicExecutorReturnsVO_dynamicExecutorType;
    /** id */
    id: string;
    /** 动态执行人类型描述 */
    dynamicExecutorTypeDesc?: string;
    /** 名称 */
    name: string;
    /** 编号 */
    code: string;
    /** 系统控件类型 */
    executorSysType?: ETheProcessNodeDynamicExecutorReturnsVO_executorSysType;
    /** 配置类型 */
    executorType?: ETheProcessNodeDynamicExecutorReturnsVO_executorType;
}

export enum ETheProcessNodeDynamicExecutorReturnsVO_dynamicExecutorType {
    /** 任务方案 */
    TASK_PLAN = "TASK_PLAN"
}

export enum ETheProcessNodeDynamicExecutorReturnsVO_executorSysType {
    /** 创建人 */
    CREATE_BY = "CREATE_BY",
    /** 创建部门 */
    CREATE_DEPARTMENT = "CREATE_DEPARTMENT",
    /** 任务方案 */
    FLOW_PATH_TASK_PLAN = "FLOW_PATH_TASK_PLAN"
}

export enum ETheProcessNodeDynamicExecutorReturnsVO_executorType {
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
