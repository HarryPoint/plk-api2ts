import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17600/doc.html#/default/邮件任务/searchByAttachmentConfigUsingPOST
*/
export default function fetchMethod(options: { data: IEmailTaskAttachmentConfigQueryRequestDTO }, extraOptions?: any) {
    return http<IJSONResultListEmailTaskQueryResponseDTO>(
        {
            url: "/message-notification-service/emailTask/searchByAttachmentConfig",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** EmailTaskAttachmentConfigQueryRequestDTO */
export interface IEmailTaskAttachmentConfigQueryRequestDTO {
    /** 应用ID列表-精确匹配 */
    refIdList?: number[];
}
/** JSONResult«List«EmailTaskQueryResponseDTO»» */
export interface IJSONResultListEmailTaskQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IEmailTaskQueryResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** EmailTaskQueryResponseDTO */
export interface IEmailTaskQueryResponseDTO {
    /** 创建用户ID */
    createUserId?: number;
    /** 创建用户名 */
    createUserName?: string;
    /** 创建部门ID */
    createDeptId?: number;
    /** 创建部门名称 */
    createDeptName?: string;
    /** 更新部门ID */
    updateDeptId?: number;
    /** 更新部门名称 */
    updateDeptName?: string;
    /** 创建时间 */
    createTime?: string;
    /** 更新用户ID */
    updateUserId?: number;
    /** 更新用户名称 */
    updateUserName?: string;
    /** 更新时间 */
    updateTime?: string;
    /** undefined */
    id?: number;
    /** 邮件名称 */
    emailName?: string;
    /** 收件人 */
    addressee?: string;
    /** 邮件主题 */
    title?: string;
    /** 发送方式 */
    sendingMode?: string;
    /** 任务状态 */
    status?: string;
}
