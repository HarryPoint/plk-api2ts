import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/文件对象相关/getUploadToSelectTreeListUsingGET
*/
export default function fetchMethod(options: {}, extraOptions?: any) {
    return http<IJSONResultListFileClassificationDetailResponseDTO4>(
        {
            url: "/masterdata-service/fileObject/getUploadToSelectTreeList",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«文件分类明细响应DTO»»_4 */
export interface IJSONResultListFileClassificationDetailResponseDTO4 {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFileClassificationDetailsRespondToDTO6[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 文件分类明细响应DTO_6 */
export interface IFileClassificationDetailsRespondToDTO6 {
    /** ID */
    id?: number;
    /** 分类名称 */
    name?: string;
    /** 上级ID */
    parentId?: number;
    /** 创建人ID */
    createUserId?: number;
    /** 下级树列表 */
    childList?: IFileClassificationDetailsRespondToDTO6[];
    /** 用户权限列表 */
    userPermissionList?: ('CATEGORY_EDIT' | 'CATEGORY_MOVE' | 'CATEGORY_REMOVE' | 'UPLOAD_FILE' | 'CATEGORY_VIEW' | 'FILE_RENAME' | 'FILE_DOWNLOAD' | 'FILE_MOVE' | 'FILE_REMOVE')[];
}
