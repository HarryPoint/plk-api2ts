import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/任务班次相关/editUsingPOST_10
*/
export default function fetchMethod(options: { data: ITaskShiftEditDTO }, extraOptions?: any) {
    return http<IJSONResultobject>(
        {
            url: "/app-enterprise-web/api/app/enterprise/flowPathShift/edit",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 任务班次编辑DTO */
export interface ITaskShiftEditDTO {
    /** id */
    id?: number;
    /** 班次编号 */
    code?: string;
    /** 开始时间 HH:mm */
    beginTime: string;
    /** 班次结束时间类型 */
    endTimeType?: ETaskShiftEditDTO_endTimeType;
    /** 结束时间 HH:mm */
    endTime: string;
    /** 员工集合 */
    users?: IExecutiveEditorDTO[];
    /** 方案名称 */
    planName?: string;
}
/** 执行人编辑DTO */
export interface IExecutiveEditorDTO {
    /** id */
    executorId?: number;
    /** 执行人类型 */
    executorType?: EExecutiveEditorDTO_executorType;
    /** 执行人系统控件类型 */
    executorSysType?: EExecutiveEditorDTO_executorSysType;
}
/** JSONResult«object» */
export interface IJSONResultobject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: Record<string, any>;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}

export enum ETaskShiftEditDTO_endTimeType {
    /** 当日 */
    TODAY = "TODAY",
    /** 次日 */
    NEXT = "NEXT"
}

export enum EExecutiveEditorDTO_executorType {
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

export enum EExecutiveEditorDTO_executorSysType {
    /** 创建人 */
    CREATE_BY = "CREATE_BY",
    /** 创建部门 */
    CREATE_DEPARTMENT = "CREATE_DEPARTMENT",
    /** 任务方案 */
    FLOW_PATH_TASK_PLAN = "FLOW_PATH_TASK_PLAN"
}
