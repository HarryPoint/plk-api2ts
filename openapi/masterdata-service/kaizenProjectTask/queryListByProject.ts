import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/kaizen项目任务相关/queryListByProjectUsingGET
*/
export default function fetchMethod(options: { params: { projectId?: number } }, extraOptions?: any) {
    return http<IJSONResultListKaizenProjectTaskResponseDTO>(
        {
            url: "/masterdata-service/kaizenProjectTask/queryListByProject",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«KaizenProjectTaskResponseDTO»» */
export interface IJSONResultListKaizenProjectTaskResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IKaizenProjectTaskResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** KaizenProjectTaskResponseDTO */
export interface IKaizenProjectTaskResponseDTO {
    /** ID */
    id?: number;
    /** 编码 */
    code?: string;
    /** 名称 */
    name?: string;
    /** 项目任务状态 */
    projectTaskStatus?: EKaizenProjectTaskResponseDTO_projectTaskStatus;
    /** 关联项目 */
    projectId?: IAssociateFormDataVO;
    /** 执行人 */
    leaderUserId?: IAssociateFormDataVO;
    /** 上级ID */
    parentId?: number;
    /** 开始时间 */
    beginTime?: string;
    /** 结束时间 */
    endTime?: string;
    /** 优先级 */
    priority?: EKaizenProjectTaskResponseDTO_priority;
    /** 备注 */
    remark?: string;
    /** 创建用户ID */
    createUserId?: IAssociateFormDataVO;
    /** 创建时间 */
    createTime?: string;
    /** 下级任务列表 */
    childTaskList?: IKaizenProjectTaskResponseDTO[];
}
/** 关联表单数据VO */
export interface IAssociateFormDataVO {
    /** id */
    id?: number;
    /** 关联表单显示值 */
    showFieldValue?: string;
    /** 数据状态 */
    dataStatus?: number;
    /** 是否已删除显示字段 */
    isRemovedShowField?: EAssociateFormDataVO_isRemovedShowField;
    /** 主数据ID */
    masterDataId?: number;
}

export enum EKaizenProjectTaskResponseDTO_projectTaskStatus {
    /** 未开始 */
    WAIT = "WAIT",
    /** 进行中 */
    HANDLING = "HANDLING",
    /** 已完成 */
    COMPLETE = "COMPLETE",
    /** 已取消 */
    CANCELED = "CANCELED"
}

export enum EKaizenProjectTaskResponseDTO_priority {
    /** 较低 */
    LOW = "LOW",
    /** 普通 */
    NORMAL = "NORMAL",
    /** 紧急 */
    EMERGENCY = "EMERGENCY",
    /** 非常紧急 */
    EXTREME_EMERGENCY = "EXTREME_EMERGENCY"
}

export enum EAssociateFormDataVO_isRemovedShowField {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
