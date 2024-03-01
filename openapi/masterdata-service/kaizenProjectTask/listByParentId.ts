import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/kaizen项目任务相关/listByParentIdUsingGET
*/
export default function fetchMethod(options: { params: { parentId?: string } }, extraOptions?: any) {
    return http<IJSONResultListKaizenProjectTaskResponseDTO>(
        {
            url: "/masterdata-service/kaizenProjectTask/listByParentId",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«KaizenProjectTaskResponseDTO»» */
export interface IJSONResultListKaizenProjectTaskResponseDTO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IKaizenProjectTaskResponseDTO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** KaizenProjectTaskResponseDTO */
export interface IKaizenProjectTaskResponseDTO {
    /** 开始时间 */
    beginTime?: number;
    /** 下级任务列表 */
    childTaskList?: IKaizenProjectTaskResponseDTO[];
    /** 编码 */
    code?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建用户ID */
    createUserId?: IAssociateFormDataVO;
    /** 结束时间 */
    endTime?: number;
    /** ID */
    id?: string;
    /** 执行人 */
    leaderUserId?: IAssociateFormDataVO;
    /** 名称 */
    name?: string;
    /** 上级ID */
    parentId?: string;
    /** 优先级 */
    priority?: EKaizenProjectTaskResponseDTO_priority;
    /** 关联项目 */
    projectId?: IAssociateFormDataVO;
    /** 项目任务状态 */
    projectTaskStatus?: EKaizenProjectTaskResponseDTO_projectTaskStatus;
    /** 备注 */
    remark?: string;
}
/** 关联表单数据VO */
export interface IAssociateFormDataVO {
    /** 数据状态 */
    dataStatus?: number;
    /** id */
    id?: string;
    /** 是否已删除显示字段 */
    isRemovedShowField?: EAssociateFormDataVO_isRemovedShowField;
    /** 主数据ID */
    masterDataId?: string;
    /** 关联表单显示值 */
    showFieldValue?: string;
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

export enum EAssociateFormDataVO_isRemovedShowField {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
