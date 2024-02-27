import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程节点负责人相关/getLeaderUserVoByFlowPathNodeIdUsingPOST
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; flowPathNodeId?: string } }, extraOptions?: any) {
    return http<IJSONResultListProcessNodeExecutorVO>(
        {
            url: "/flow-service/flowPathNodeLeaderUser/getLeaderUserVoByFlowPathNodeId",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«流程节点执行人VO»» */
export interface IJSONResultListProcessNodeExecutorVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessNodeExecutorVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
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
