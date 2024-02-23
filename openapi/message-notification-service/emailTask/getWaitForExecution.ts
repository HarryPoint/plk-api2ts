import { post } from '@/api/http';
 
// http://47.108.139.107:17600/doc.html#/default/邮件任务/getWaitForExecutionUsingPOST
export default function fetchMethod(data: IEmailTaskWaitForExecutionQueryRequestDTO) {
    return post<IJSONResultEmailTaskWaitForExecutionQueryResponseDTO['data']>({
      url: "/message-notification-service/emailTask/getWaitForExecution",
      data,
    });
}
// EmailTaskWaitForExecutionQueryRequestDTO
export interface IEmailTaskWaitForExecutionQueryRequestDTO {
    // undefined
    fileType: string;
}
// JSONResult«EmailTaskWaitForExecutionQueryResponseDTO»
export interface IJSONResultEmailTaskWaitForExecutionQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IEmailTaskWaitForExecutionQueryResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// EmailTaskWaitForExecutionQueryResponseDTO
export interface IEmailTaskWaitForExecutionQueryResponseDTO {
    // ID
    id: number;
    // 邮件名称
    emailName: string;
    // 收件人
    addressee: string;
    // 标题
    title: string;
    // 邮件正文
    content: string;
    // 发送时间
    sendingTime: string;
    // 下次发送时间
    nextSendingTime: string;
    // 上次发送时间
    lastSendingTime: string;
    // 引用ID列表- 这里指的是报表模板的ID列表
    refIdList: number[];
}
