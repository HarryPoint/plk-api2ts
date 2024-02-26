import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/邮件任务/pageSearchUsingPOST
*/
export default function fetchMethod(data: IPage2, extraOptions?: any) {
    return http<IEmailTaskQueryResponseDTOJSONResultPagingInformation>(
        {
            url: "/app-enterprise-web/api/app/enterprise/emailTask/pageSearch",
            method: "post",
            data,
        },
        extraOptions,
    );
}
/** 分页_2 */
export interface IPage2 {
    /** 邮件名称-模糊查询 */
    emailName: string;
    /** 当前页面 */
    pageNo: number;
    /** 分页大小 */
    pageSize: number;
    /** 排序字段集 */
    orders: IPagingSortVO[];
    /** 收件人-模糊查询 */
    addressee: string;
    /** 创建用户-精确匹配 */
    createUserId: number;
    /** 邮件主题-模糊查询 */
    title: string;
    /** 修改用户-精确匹配 */
    updateUserId: number;
    /** 发送模式-精确匹配 */
    sendingMode: string;
    /** 创建时间-结束范围 */
    createTimeEnd: string;
    /** 任务状态-精确匹配 */
    status: string;
    /** 修改时间-结束范围 */
    updateTimeEnd: string;
    /** 创建时间-起始范围 */
    createTimeBegin: string;
    /** 邮件任务ID列表 */
    emailTaskIdList: number[];
    /** 修改时间-起始范围 */
    updateTimeBegin: string;
    /** 附件查询请求 */
    attachmentConfigQueryRequest: IEmailTaskAttachmentConfigQueryRequestDTO;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column: string;
    /** undefined */
    isAsc: string;
}
/** EmailTaskAttachmentConfigQueryRequestDTO */
export interface IEmailTaskAttachmentConfigQueryRequestDTO {
    /** 应用ID列表-精确匹配 */
    refIdList: number[];
}
/** JSONResult«分页信息«EmailTaskQueryResponseDTO»» */
export interface IEmailTaskQueryResponseDTOJSONResultPagingInformation {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IThePagingInformationEmailTaskQueryResponseDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 分页信息«EmailTaskQueryResponseDTO» */
export interface IThePagingInformationEmailTaskQueryResponseDTO {
    /** 当前页码 */
    pageNo: number;
    /** 分页大小 */
    pageSize: number;
    /** 总页数 */
    totalPage: number;
    /** 总的记录数 */
    totalCount: number;
    /** 分页列表 */
    list: IEmailTaskQueryResponseDTO[];
    /** 最后页页码 */
    lastPage: number;
    /** 是否有上一页 */
    hasPreviousPage: string;
    /** 是否有下一页 */
    hasNextPage: string;
    /** 上一页页码 */
    previousPage: number;
    /** 下一页页码 */
    nextPage: number;
}
/** EmailTaskQueryResponseDTO */
export interface IEmailTaskQueryResponseDTO {
    /** 创建用户ID */
    createUserId: number;
    /** 创建用户名 */
    createUserName: string;
    /** 创建部门ID */
    createDeptId: number;
    /** 创建部门名称 */
    createDeptName: string;
    /** 更新部门ID */
    updateDeptId: number;
    /** 更新部门名称 */
    updateDeptName: string;
    /** 创建时间 */
    createTime: string;
    /** 更新用户ID */
    updateUserId: number;
    /** 更新用户名称 */
    updateUserName: string;
    /** 更新时间 */
    updateTime: string;
    /** undefined */
    id: number;
    /** 邮件名称 */
    emailName: string;
    /** 收件人 */
    addressee: string;
    /** 邮件主题 */
    title: string;
    /** 发送方式 */
    sendingMode: string;
    /** 任务状态 */
    status: string;
}
