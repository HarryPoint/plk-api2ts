import { post } from '@/api/http';
 
// http://47.108.139.107:17600/doc.html#/default/邮件任务/pagingSearchUsingPOST
export default function fetchMethod(data: ISendAnEmailRecordQueryRequest) {
    return post<ISendingEmailRecordQueryResponseDTOJSONResultPagingInformation['data']>({
      url: "/message-notification-service/sendingEmailRecord/pagingSearch",
      data,
    });
}
// 发送邮件记录查询请求
export interface ISendAnEmailRecordQueryRequest {
    // 当前页面
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 邮件名称-模糊搜索
    emailName: string;
    // 发送时间-起始
    sendingTimeBegin: string;
    // 发送时间-截止
    sendingTimeEnd: string;
    // 邮件标题-模糊搜索
    title: string;
    // 收件人地址-模糊搜索
    addressee: string;
    // 邮件正文-模糊搜索
    content: string;
    // 发送状态-精确匹配
    status: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// JSONResult«分页信息«SendingEmailRecordQueryResponseDTO»»
export interface ISendingEmailRecordQueryResponseDTOJSONResultPagingInformation {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IThePagingInformationSendingEmailRecordQueryResponseDTO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 分页信息«SendingEmailRecordQueryResponseDTO»
export interface IThePagingInformationSendingEmailRecordQueryResponseDTO {
    // 当前页码
    pageNo: number;
    // 分页大小
    pageSize: number;
    // 总页数
    totalPage: number;
    // 总的记录数
    totalCount: number;
    // 分页列表
    list: ISendingEmailRecordQueryResponseDTO[];
    // 最后页页码
    lastPage: number;
    // 是否有上一页
    hasPreviousPage: string;
    // 是否有下一页
    hasNextPage: string;
    // 上一页页码
    previousPage: number;
    // 下一页页码
    nextPage: number;
}
// SendingEmailRecordQueryResponseDTO
export interface ISendingEmailRecordQueryResponseDTO {
    // ID
    id: number;
    // 邮件名称
    emailName: string;
    // 邮件任务ID
    emailTaskId: number;
    // 邮件任务-标题
    title: string;
    // 内容
    content: string;
    // 发送邮件状态
    status: string;
    // 发送时间
    sendingTime: string;
    // 发送来源
    sendingFrom: string;
    // 收件人地址
    addressee: string;
    //  是否已准备好数据，只有准备好的邮件才能重新发送
    isReady: string;
    // 失败的原因
    failureReason: string;
}
