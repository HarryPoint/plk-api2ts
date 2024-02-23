import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/文件对象相关/renameUsingPOST
export default function fetchMethod(data: IFileObjectRenameRequestDTO) {
    return http<IJSONResultstring1>({
        url: "/masterdata-service/fileObject/rename",
        method: "post",
        data,
    });
}
// FileObjectRenameRequestDTO
export interface IFileObjectRenameRequestDTO {
    // 文件对象ID
    fileObjectId: number;
    // 文件名称
    fileName: string;
}
// JSONResult«string»_1
export interface IJSONResultstring1 {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: string;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
