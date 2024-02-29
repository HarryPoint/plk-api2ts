import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16500/doc.html#/default/任务班次关联相关/getByShiftIdUsingGET
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; flowPathShiftId?: string } }, extraOptions?: any) {
    return http<IJSONResultListFlowPathShiftUserRpVO>(
        {
            url: "/flow-service/flowPathShiftUserRp/getByShiftId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«FlowPathShiftUserRpVO»» */
export interface IJSONResultListFlowPathShiftUserRpVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFlowPathShiftUserRpVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** FlowPathShiftUserRpVO */
export interface IFlowPathShiftUserRpVO {
    /** id */
    id?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** 对应班次id */
    flowPathShiftId?: string;
    /** 关联id */
    executorId?: string;
    /** 关联类型 */
    executorType?: EFlowPathShiftUserRpVO_executorType;
    /** 关联系统控件类型 */
    executorSysType?: EFlowPathShiftUserRpVO_executorSysType;
}

export enum EFlowPathShiftUserRpVO_executorType {
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

export enum EFlowPathShiftUserRpVO_executorSysType {
    /** 创建人 */
    CREATE_BY = "CREATE_BY",
    /** 创建部门 */
    CREATE_DEPARTMENT = "CREATE_DEPARTMENT",
    /** 任务方案 */
    FLOW_PATH_TASK_PLAN = "FLOW_PATH_TASK_PLAN"
}
